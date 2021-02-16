type Url = string
type Json =
    | string
    | number
    | boolean
    | null
    | { [property: string]: Json }
    | Json[]

type TPersonId = string

type TPerson = {
    id: TPersonId
    name: string
    thumbUp: number
    thumbDown: number
    image: Url
    information_url: string
    description: string
}

type TAPIPersonResponse = TPerson

type TAPOPeopleResponse = {
    lenght: number
    data: TPerson[]
    error?: string
}
type TVote = {
    personId: TPersonId,
    thumbUp: number
    thumbDown: number
}
type TUserId = string

type TUser = {
    id: TUserId
    names: string
    username: string
    password: string
    email: string
    votes: Tvote[]
}
type TValidator = {
    type: string,
    message: string,
    check: Function,
    valueToCheck?: number
}

type TError = {
    type: string
    message: string
}
type Nullable<T> = T | null
