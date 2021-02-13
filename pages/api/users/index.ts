import UserDB from '@users'

const allUsers = async (request: any, response: any) => {
    const db = new UserDB()
    const allEntries = await db.getAll()
    return response.status(200).json(allEntries);
}

export default allUsers
