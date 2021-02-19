import UsersDB from '@users'
import {NextApiRequest, NextApiResponse} from "next"

const indexApi = async (request: NextApiRequest, response: NextApiResponse) => {
    const { method } = request
    if(method != 'POST'){
        response.setHeader('Allow', ['POST'])
        return response.status(405).end(`Method ${method} Not Allowed`)
    }
    const db = new UsersDB()
    const { username, password } = request.body
    const user = await db.login(username as string, password as string)
    return user? response.status(200).json(user) : response.status(401).json({message: 'Username and password do not match.'})
}

export default indexApi
