import {
    SESSION_ERROR,
    SESSION_LOADING,
    SESSION_LOGIN,
    SESSION_LOGOUT
} from '@context/types/sessionTypes'
import {useLocalStorage} from "../hooks/localStorage";
import {useRouter} from "next/router";

export const useSessionActions = (dispatch: React.Dispatch<any>) => {
    const {  setLocalStorage, removeValue } = useLocalStorage('user', '')
    const router = useRouter()

    const authenticationSuccess = (user: TUser) => {
        router.replace('/' )
        dispatch({type: SESSION_LOGIN, payload: user})
        setLocalStorage(user.id)
    }
    const authenticationFailed = (error: string) => {
        dispatch({type: SESSION_ERROR, payload: error})
        removeValue()
    }

    /**
     * @param {*} loginInfo {username, password}
     */
    const login = async (username: string, password: string) => {
        dispatch({type: SESSION_LOADING})

        await window.fetch(`/api/auth`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                password
            }),
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
                throw new Error('Username and password do not match.')
            })
            .then(authenticationSuccess)
            .catch(e => authenticationFailed(e.message))
    }

    const logout = async () => {
        removeValue()
        dispatch({type: SESSION_LOGOUT})
    }


    return {login, logout}
}
