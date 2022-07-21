import React, {useEffect} from 'react';
import Snackbar from '@mui/material/Snackbar';
import {Alert} from "@mui/material";

const SnackbarComponent = ({ open, type, messageText, handleClose }) => {

    useEffect(() => {
        if(open) {
            setTimeout(() => {
                handleClose()
            }, 2000)
        }
    },[open])

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={open}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={type || 'success'} sx={{ width: '100%' }}>
                    {messageText}
                </Alert>
            </Snackbar>
        </>
    )
}

export default SnackbarComponent;