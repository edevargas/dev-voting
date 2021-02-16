import {useState} from 'react'

export const useLocalStorage = (key: string, initialValue: string) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item !== null ? JSON.parse(item) : initialValue
        } catch (e) {
            return initialValue
        }
    })

    const setLocalStorage = (value: string) => {
        try {
            window.localStorage.setItem(key, value)
            setStoredValue(value)
        } catch (e) {
            console.log(e)
        }
    }

    const removeValue = () => {
        try {
            window.localStorage.removeItem(key)
            setStoredValue(null)
        } catch (e) {
            console.log(e)
        }
    }

    return {storedValue, setLocalStorage, removeValue}
}
