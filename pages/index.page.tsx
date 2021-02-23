import React, {useEffect} from 'react'
import ListCard from "@components/Home/ListCard/ListCard";
import Header from "@components/layouts/Header";
import MessageBar from "@components/Home/MessageBar/MessageBar";
import {usePeopleActions} from "../actions/peopleActions";
import {useStore} from "@context/storeContext";

export const getStaticProps = async () => {
    const response = await fetch('https://dev-voting.vercel.app/api/people')
    const peopleList = await response.json()

    return {
        props: {
            peopleList
        }
    }
}
const Home = ({ peopleList }: { peopleList: TPerson[] }) => {
    const {state: { people: { people } },
        dispatch
    } = useStore()
    const { setPeopleList } = usePeopleActions(dispatch)

    useEffect(() => {
        setPeopleList(peopleList)
    }, [peopleList])

    const fillBody = () => (peopleList && ( <ListCard people={people} />))

    return (
        <div>
            <Header/>
            <MessageBar/>
            {fillBody()}
        </div>
    )
}

export default Home
