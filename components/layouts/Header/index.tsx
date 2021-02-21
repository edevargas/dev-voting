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
            !isAuthenticatedUser ? (<>
                <Link href={"/login"} >
                    <ButtonRedirect/>

                </Link></>) : (
                <Button onClick={handleLogout} color="inherit">Sign out</Button>
            )
        }</>)

    const ButtonRedirect = React.forwardRef(function CustomComponent(props, ref) {
        return (
            <a>
                <LogInOutButton>Sign In</LogInOutButton>
            </a>
        )
    })

    return (
        <CustomToolbar>
            <Typography variant="h6">
                Rule of Thumb
            </Typography>
            {fillLogButton()}

        </CustomToolbar>
    )
}
