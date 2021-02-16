import React, {PropsWithChildren} from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Slide from '@material-ui/core/Slide'
import {Button, IconButton} from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close'

type SnackbarProps = {
    message: string,
    open: boolean,
    handleClose: any
}
function TransitionUp(props: PropsWithChildren<any>) {
    return <Slide {...props} direction="up" />;
}

export const CustomSnackbar: React.FC<SnackbarProps> = ({message, open, handleClose}) => {
    return (
        <Snackbar
            open={open}
            TransitionComponent={TransitionUp}
            message={message}
            action={
                <>
                    <Button color="secondary" size="small" onClick={handleClose}>
                        UNDO
                    </Button>
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                </>
            }
        />
    );
};

export default CustomSnackbar;
