import {useEffect, useState} from 'react'

export const useLoginState = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const handleSubmit = (dataForm) => {
        console.log('handle submit Login')
    }

    return {
        handleSubmit,
        loading,
        error
    }

}

