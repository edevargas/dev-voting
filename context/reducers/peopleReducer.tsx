import {
    PEOPLE_ADD, PEOPLE_DELETE,
    PEOPLE_ERROR,
    PEOPLE_LOADING,
    PEOPLE_SELECT,
    PEOPLE_SET_LIST
} from '@context/types/peopleTypes'

export const peopleReducer = (state: TPeopleState, action: TAction) => {
    switch (action.type) {
        case PEOPLE_LOADING:
            return {...state, loading: true, error: null}
        case PEOPLE_ERROR:
            return {...state, loading: false, error: action.payload}
        case PEOPLE_SET_LIST:
            return {
                ...state,
                loading: false,
                error: null,
                people: action.payload
            }
        case PEOPLE_SELECT:
            return {
                ...state,
                selectedPerson: action.payload
            }
        case PEOPLE_ADD:
            return {
                ...state,
                people: [...state.people, action.payload]
            }
        case PEOPLE_DELETE:
            return {
                ...state,
                people: [...state.people.slice(0, action.payload), ...state.people.slice(action.payload + 1)]
            }
        default:
            return state
    }
}
