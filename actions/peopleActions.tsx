import {PEOPLE_SET_LIST} from "@context/types/peopleTypes";

export const usePeopleActions = (dispatch: React.Dispatch<any>) => {

    const getPeople = async () => {
        const response = await fetch('https://dev-voting.vercel.app/api/people')
        const peopleList = await response.json()
        dispatch({ type: PEOPLE_SET_LIST, payload: peopleList})
    }

    const setPeopleList = (peopleList: TPerson[]) => {
        dispatch({ type: PEOPLE_SET_LIST, payload: peopleList})
    }


    return { getPeople, setPeopleList }
}
