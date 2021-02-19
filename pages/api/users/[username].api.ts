import UsersDB from '@users'
import { NextApiRequest, NextApiResponse} from "next"

const enpoint = async (request: NextApiRequest, response: NextApiResponse) => {
    const { method } = request
    const username = request.query.username
    switch (method) {
        case 'GET':
            return getByUsername(username as string, response)
            break
        default:
            return methodNotAllowed(method as string, response)
            break
    }

}

const getByUsername = async (username: string, response: NextApiResponse) => {
    const db = new UsersDB()

    const person = await db.getByUsername(username)
    return response.status(200).json(person)
}

const methodNotAllowed = (method: string, response: NextApiResponse) => {
    response.setHeader('Allow', ['GET'])
    return response.status(405).end(`Method ${method} Not Allowed`)
}


export default enpoint
