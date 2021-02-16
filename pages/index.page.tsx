import React, {useEffect, useState} from 'react'
import ListCard from "@components/Home/ListCard/ListCard";
import Header from "@components/layouts/Header";

const Home = () => {
    const [people, setPeople] = useState<TPerson[]>([])

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        window.fetch('/api/people')
            .then(response => response.json())
            .then(updateState)
    }

    const updateState = (people: TPerson[]) => {
        setPeople(people)
    }

    const fillBody = () => (people.length > 0 && ( <ListCard people={people} />))
    return (
        <div>
            <Header/>
            {fillBody()}
        </div>
    )
}

export default Home
