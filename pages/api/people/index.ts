import DB from '@database'

const allPeople = async (request: any, response: any) => {
    const db = new DB()
    const allEntries = await db.getAll()
    return response.status(200).json(allEntries);
}

export default allPeople
