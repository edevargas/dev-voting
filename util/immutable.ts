interface ImmutableAction {
    index: number,
    item: any
}
export const updateObjectInArray = (array: any[], action:ImmutableAction) => {
    return array.map((item, index) => {
        if (index !== action.index) {
            // This isn't the item we care about - keep it as-is
            return item
        }

        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...action.item
        }
    })
}

export const insertItem = (array: any[], action: ImmutableAction) => {
    let newArray = array.slice()
    newArray.splice(action.index, 0, action.item)
    return newArray
}

export const removeItem = (array: any[], action: ImmutableAction) => {
    let newArray = array.slice()
    newArray.splice(action.index, 1)
    return newArray
}
