import { 
    Button,
    TextField,
    Link,
    Grid,
    Typography,
    ImageListItem, 
    FormControl,
    InputLabel,
    InputAdornment,
    OutlinedInput,
    IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { redButtonStyle } from "../styles/button";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Copyright } from "../components/copyright";

import type { RootState } from "../store";
import { useDispatch, useSelector } from 'react-redux'
import { setGame } from "../reducers/gameSet";
import { switchPage } from "../reducers/pageSwitch";
import { errorNof, successNof } from "../reducers/nofBar";
import { changePassword, changeUsername } from "../reducers/fieldSwitch";
import { postLogin } from "../services/auth";

export const LoginForm = () => {
    const dispatch = useDispatch()
    const username = useSelector((state: RootState) => state.field.username)
    const password = useSelector((state: RootState) => state.field.password)
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    async function handleLogin() {
        if (username == '' || password == '') dispatch(errorNof("Empty input"));
        else if (username.length < 6 || username.length > 12) dispatch(errorNof("Username must be between 6-12 characters"))
        else if (password.length < 6) dispatch(errorNof("Password must be longer than 6 characters"))
        else try {
            const res = await postLogin(username, password);
            localStorage.gameToken = res.data.accessToken;
            dispatch(successNof("Logged in successfully"));
            dispatch(switchPage(6));
        } catch (err: any) {
            err.response.status == 400 ?
            dispatch(errorNof("Invalid input")) :
            dispatch(errorNof("Your credentials are invalid")); 
        }
    }

    useEffect(() => {
        if (localStorage.gameToken) dispatch(switchPage(6));
    });

    return (
        <Grid container alignItems='center' direction='column'>
            <Grid item alignSelf='flex-end' paddingTop='4vh' paddingRight='3vw'>
                <Typography fontSize='1vw' fontWeight='700'>
                    {'Not a member? '}
                    <Link color="#Aa292d" href='#' underline="none" onClick={() => dispatch(switchPage(4))}>
                        Register now
                    </Link>
                </Typography>
            </Grid>
            <Grid item>
                <ImageListItem sx={{width: '25vw'}}>
                    <img src="/images/logo.png"></img>
                </ImageListItem>
            </Grid>
            <Grid item paddingTop='3vh'>
                <TextField size='small' label="Username" autoComplete="username" error sx={{
                        backgroundColor: '#ffffff',
                        borderRadius: '0.5vw',
                        margin: '5px',
                        width: {md: '28vw', lg: '12vw'},
                    }}
                    value={username}
                    onChange={(e) => dispatch(changeUsername(e.target.value))}
                />
                <FormControl size="small" margin="dense" error sx={{
                        backgroundColor: '#ffffff',
                        borderRadius: '0.5vw',
                        margin: '5px',
                        width: {md: '28vw', lg: '12vw'},     
                    }}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={handleClickShowPassword}>
                                {showPassword ? <VisibilityOff color="error" /> : <Visibility color="error" />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label='Password'
                        value={password}
                        onChange={(e) => dispatch(changePassword(e.target.value))}
                    />
                </FormControl>
            </Grid>
            <Grid item alignSelf='flex-end' paddingX='2.5vw'>
                <Link color="#Aa292d" href='#' underline="none">
                    <Typography fontWeight='700' fontSize='1vw' onClick={() => dispatch(switchPage(1))}>Forgot password</Typography>
                </Link>
            </Grid>
            <Grid item width='20vw' paddingTop='5vh'>
                <Button fullWidth variant="contained" sx={redButtonStyle} onClick={() => handleLogin()}> 
                    LOGIN 
                </Button>
            </Grid>
            <Grid item alignSelf='flex-end' paddingX='2.5vw' paddingTop='0.5vh'>
                <Link color="#Aa292d" href='#' underline="none" onClick={() => dispatch(setGame())}>
                    <Typography fontWeight='700' fontSize='1vw'>Or continue as guest</Typography>
                </Link>
            </Grid>
            <Grid item alignSelf='flex-end' paddingTop={{md: '0.5vh', lg: '6vh'}} paddingX='2.5vw'>
                <Copyright/>
            </Grid>
            
        </Grid>
    )
}