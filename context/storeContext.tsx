import React, {createContext, useReducer, useContext} from 'react'
import {combineReducers} from './combineReducers'
import {sessionReducer} from './reducers/sessionReducer'
import {peopleReducer } from "@context/reducers/peopleReducer";

const initialState: TState  = {
    session: {
        isAuth: false,
        user: null,
        loading: false,
        error: null
    },
    people: {
        people: [],
        selectedPerson: null,
        loading: false,
        error: null
    }
}
const initialStore: TStore = {
    state: initialState,
    dispatch: (a) => {}
}
export const StoreContext = createContext(initialStore)

export const StoreProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(
        combineReducers({ session: sessionReducer, people: peopleReducer }),
        Object.assign(initialState)
    )
    const value = {state, dispatch}
    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
