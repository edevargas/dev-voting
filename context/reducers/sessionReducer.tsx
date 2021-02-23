import {
    SESSION_ERROR,
    SESSION_LOADING, SESSION_LOGIN,
    SESSION_LOGOUT,
} from "../types/sessionTypes";

export const initialState: TState = {
    session: {
        isAuth: false,
        user: null,
        loading: false,
        error: null
    }
}

export const sessionReducer = (state: TState, action: TAction) => {
    switch (action.type) {
        case SESSION_LOADING:
            return {...state, loading: true, error: null}
        case SESSION_ERROR:
            return {...state, loading: false, error: action.payload}
        case SESSION_LOGIN:
            return {
                ...state,
                loading: false,
                isAuth: true,
                user: action.payload
            }
        case SESSION_LOGOUT:
            return {
                ...state,
                loading: false,
                isAuth: false,
                user: null
            }
        default:
            return state
    }
}
