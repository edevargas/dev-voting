import {useEffect} from 'react'
import {useRouter} from "next/router";
import {useStore} from "@context/storeContext";
import {useSessionActions} from "../../actions/sessionsActions";

export const useLoginState = () => {

    const router = useRouter()
    const {
        state: {session: {isAuth, loading, error}},
        dispatch
    } = useStore()
    const {login} = useSessionActions(dispatch)

    useEffect(() => {
        // Prefetch the home page
        router.prefetch('/')
    }, [])

    useEffect(() => {
        if (isAuth) {
            router.replace('/')
        }
    }, [isAuth])


    const handleSubmit = (dataForm: { username: string, password: string }) => {
        login(dataForm.username, dataForm.password)
    }

    return {
        handleSubmit, error, loading
    }

}

