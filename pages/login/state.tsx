import {useState, useEffect} from 'react'
import { useLocalStorage } from '../../hooks/localStorage'
import { useRouter } from "next/router";
export const useLoginState = () => {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const {  storedValue, setLocalStorage, removeValue } = useLocalStorage('user', '')
    const router = useRouter()

    useEffect(() => {
        // Prefetch the home page
        router.prefetch('/')
    }, [])

    const handleSubmit = (dataForm: { username: string, password: string }) => {
        setLoading(true)
        try{
            authenticate(dataForm.username, dataForm.password)
        } catch(err) {
            setError('Username and password do not match.')
            setLoading(false)
        }
    }

    const authenticate = async (username: string, password: string) => {
        await window.fetch(`/api/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password
            }),
        })
            .then(response => response.json())
            .then(response => response.status === 200 ? authenticationSuccess(response) : authenticationError(response.message))
            .catch(e => authenticationError(e.message))
    }
    const authenticationSuccess = (user: TUser) => {
        setLocalStorage(user.id)
        setLoading(false)
        router.replace('/' )
    }
    const authenticationError = (message: string) => {
        removeValue()
        setError(message)
        setLoading(false)
    }

    return {
        handleSubmit, error, loading
    }

}

