import React, {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import {CustomToolbar, LoginButton} from "@components/layouts/Header/styles";
import Button from "@material-ui/core/Button";
import {useRouter} from "next/router";

export default function Header() {
    const [isAuthenticatedUser, setAuthenticatedUser] = useState(false)
    const router = useRouter()

    useEffect(() => {
        checkLogin()
    }, [])

    const checkLogin = () => {
        const user = localStorage.getItem('user')
        if (user) {
            setAuthenticatedUser(true)
        } else {
            setAuthenticatedUser(false)
        }
    }

    const handleLogout = async (e: any) => {
        e.preventDefault()
        await localStorage.removeItem('user')
        router.replace('/login')
    }
    const fillLogButton = () => (
        <>{
            !isAuthenticatedUser ? (
                <LoginButton href={"/login"}>
                    Sign In
                </LoginButton>) : (
                <Button onClick={handleLogout} color="inherit">Sign out</Button>
            )
        }</>)

    return (
        <CustomToolbar>
            <Typography variant="h6">
                Rule of Thumb
            </Typography>
            {fillLogButton()}

        </CustomToolbar>
    )
}
