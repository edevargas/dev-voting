import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import useLoginStyles from './styles'
import { LoginForm } from '@components/LoginForm'
import theme from '@styles/theme'

const Login: React.FC = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const classes = useLoginStyles(theme)

    const handleSubmit = () => {
        console.log('handle submit Login')
    }


    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <LoginForm onSubmit={handleSubmit} loading={loading} error={error} />
                </div>
            </Grid>
        </Grid>
    )
}
export default Login
