import PeopleDB from '@people'

const allPeople = async (request: any, response: any) => {
    const db = new PeopleDB()
    const allEntries = await db.getAll()
    return response.status(200).json(allEntries);
}

export default allPeople
