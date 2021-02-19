import users from './data/users'

class UsersDB {
    constructor() {
    }

    async getAll(): Promise<TUser[]> {
        const asArray = Object.values(users)
        await randomDelay()
        return asArray
    }

    async getById(id: string): Promise<TUser | null> {
        if (!Object.prototype.hasOwnProperty.call(users, id)) {
            return null
        }

        const entry = users[id]
        await randomDelay()
        return entry
    }

    async login(username: string, password: string): Promise<TUser | null> {
        const userId = (Object.keys(users) as Array<TUserId>).find(id => users[id].username === username && users[id].password === password)
        if (!userId) {
            return null
        }
        const entry = users[userId]
        await randomDelay()
        return entry
    }

    async getByUsername(username: string): Promise<TUser | null> {
        const userId = (Object.keys(users) as Array<TUserId>).find(id => users[id].username === username)
        if (!userId) {
            return null
        }
        const entry = users[userId]
        await randomDelay()
        return entry
    }
}


const randomDelay = () =>
    new Promise((resolve) => {
        const max = 350
        const min = 100
        const delay = Math.floor(Math.random() * (max - min + 1)) + min

        setTimeout(resolve, delay)
    })

export default UsersDB
