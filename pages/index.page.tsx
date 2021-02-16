import React, {useEffect, useState} from 'react'
import Navbar from '@components/Navbar/Navbar'
import ListCard from "@components/Home/ListCard/ListCard";

const Home = () => {
    const [people, setPeople] = useState<TPerson[]>([])

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
       console.log(people)
    }, [people])

    const getData = async () => {
        window.fetch('/api/people')
            .then(response => response.json())
            .then(updateState)
    }

    const updateState = (people) => {
        console.log('updateState', people)
        setPeople(people)
    }

    const fillBody = () => (people.length > 0 && ( <ListCard people={people} />))
    return (
        <div>
            <Navbar/>
            {fillBody()}
        </div>
    )
}

export default Home
