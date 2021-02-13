import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
    const [people, setPeople] = useState<TPerson[]>([])

    useEffect(() => {
    getData()
    }, [])

    const getData = async () => {
        window.fetch('/api/people')
            .then( response => response.json())
            .then(json => setPeople(json))
    }

    return (
        <div>
            <Navbar/>
            {people.map(person => (
                <div key={person.id}>{person.name}</div>)
            )}
        </div>
    )
}

export default Home
