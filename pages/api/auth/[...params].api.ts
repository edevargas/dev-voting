import UsersDB from '@users'
import {NextApiRequest, NextApiResponse} from "next"

const paramsApi = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new UsersDB()
    const username = request.query.params[0]
    const password = request.query.params[1]
    const user = await db.login(username as string, password as string)
    return user? response.status(200).json(user) : response.status(204)
}
export default paramsApi
