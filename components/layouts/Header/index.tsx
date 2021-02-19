import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {CustomToolbar, LogInOutButton} from "@components/layouts/Header/styles";
import Button from "@material-ui/core/Button";
import Link from "next/link";
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
                <Link href="/login">
                    <LogInOutButton/>
                </Link>) : (
                <Button onClick={handleLogout} color="inherit">Sign out</Button>
            )
        }</>)


    return (
        <CustomToolbar>
            <Typography variant="h6">
                Voting Test
            </Typography>
            {fillLogButton()}

        </CustomToolbar>
    )
}
