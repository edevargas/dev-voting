import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { LoginContainer, PaperContainer} from './styles'
import {LoginForm} from '@components/LoginForm'
import {useLoginState} from "./state";

const Login: React.FC = () => {
    const {loading, error, handleSubmit} = useLoginState();

    return (
        <LoginContainer>
            <CssBaseline/>
            <PaperContainer>
                <LoginForm onSubmit={handleSubmit} loading={loading} error={error}/>
            </PaperContainer>
        </LoginContainer>
    )
}
export default Login
