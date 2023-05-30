import { AppBar, Button, Stack, Toolbar, ImageListItem, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { openFeedback } from "../reducers/barSet"

export const InfoBar = () => {
    const dispatch = useDispatch()

    return (
        <AppBar sx={{paddingTop: '0vh', backgroundColor: '#000000'}}>
            <Toolbar>
                <ImageListItem sx={{width: '5vw'}}>
                    <img src="/images/logo.png"></img>
                </ImageListItem>
                <Typography fontSize='1vw' paddingLeft='0.5vw' paddingRight='0.5vw'> - A GAME OF H.VŨ & A.VŨ |</Typography>
                <Stack direction='row' spacing='1vw'>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Changelog</Button>
                    <Button color='inherit' onClick={() => dispatch(openFeedback())}>Feedback</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}