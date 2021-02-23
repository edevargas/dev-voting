import React, {createContext, useReducer, useContext} from 'react'
import {combineReducers} from './combineReducers'
import {sessionReducer, initialState as sessionInitialState} from './reducers/sessionReducer'

const initialState: TStore = {
    state: sessionInitialState,
    dispatch: (a) => {}
}
export const StoreContext = createContext(initialState)

export const StoreProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(
        combineReducers({session: sessionReducer}),
        Object.assign(sessionInitialState)
    )
    const value = {state, dispatch}
    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
