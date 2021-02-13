import UsersDB from '@users'

const allUsers = async (request: any, response: any) => {
    const db = new UsersDB()
    const allEntries = await db.getAll()
    return response.status(200).json(allEntries);
}

export default allUsers
