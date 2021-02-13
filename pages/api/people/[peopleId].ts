import PeopleDB from '@people'
import { NextApiRequest, NextApiResponse} from "next";

const getById = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new PeopleDB()
    const id = request.query.peopleId
    const person = await db.getById(id as string)
    return response.status(200).json(person);
}

export default getById
