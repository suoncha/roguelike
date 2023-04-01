import { Snackbar, Button, Alert, AlertProps } from "@mui/material";
import { useState, forwardRef } from "react";

const SuccessAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props}/>
    }
)

export const SnackbarSuccess = (text: String) => {
    const [open, setOpen] = useState(true)
    const handleClose = (
        event? : React.SyntheticEvent | Event, 
        reason? : string
    ) => {
        if (reason == 'clickaway') return
        setOpen(false)
    }
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <SuccessAlert onClose={handleClose} severity='success'>
                {text}
            </SuccessAlert>
        </Snackbar>
    )
}