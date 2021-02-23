import React from 'react';
import Typography from '@material-ui/core/Typography';
import {CustomToolbar, LoginButton} from "@components/layouts/Header/styles";
import Button from "@material-ui/core/Button";
import {useRouter} from "next/router";
import {useStore} from "@context/storeContext";
import {useSessionActions} from "../../../actions/sessionsActions";

export default function Header() {
    const router = useRouter()
    const {
        state: {session: {isAuth}},
        dispatch
    } = useStore()
    const {logout} = useSessionActions(dispatch)

    const handleLogout = async (e: any) => {
        e.preventDefault()
        logout()
        router.replace('/login')
    }
    const fillLogButton = () => (
        <>{
            !isAuth ? (
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
