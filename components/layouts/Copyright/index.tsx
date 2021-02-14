import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import React from 'react'

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/edevargas">
                Elías De Vargas Lab
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright
