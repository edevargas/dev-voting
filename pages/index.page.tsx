import React from 'react'
import ListCard from "@components/Home/ListCard/ListCard";
import Header from "@components/layouts/Header";

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

    const fillBody = () => (peopleList && ( <ListCard people={peopleList} />))
    return (
        <div>
            <Header/>
            {fillBody()}
        </div>
    )
}

export default Home
