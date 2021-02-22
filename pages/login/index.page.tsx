import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {FormContent, LoginContainer} from './styles'
import {LoginForm} from '@components/LoginForm'
import {useLoginState} from "./state";
import Paper from '@material-ui/core/Paper';

const Login: React.FC = () => {
    const {loading, error, handleSubmit} = useLoginState();

    return (
        <LoginContainer>
            <CssBaseline/>
            <Paper>
                <FormContent>
                    <LoginForm onSubmit={handleSubmit} loading={loading} error={error}/>
                </FormContent>
            </Paper>

        </LoginContainer>
    )
}
export default Login
