import allData from './data'

class Database {
    constructor() {
    }

    async getAll(): Promise<TPerson[]> {
        const asArray = Object.values(allData)
        await randomDelay()
        return asArray
    }

    async getById(id: string): Promise<TPerson | null> {
        if (!Object.prototype.hasOwnProperty.call(allData, id)) {
            return null
        }

        const entry = allData[id]
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

export default Database
