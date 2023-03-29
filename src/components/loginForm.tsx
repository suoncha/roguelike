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
import { Copyright } from "../components/copyright";
import { useState } from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux'
import { setGame } from "../reducers/gameSet";
import { switchPage } from "../reducers/pageSwitch";

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const dispatch = useDispatch()

    const loginButtonStyle = {
        backgroundColor: '#C3171d',
        '&:hover': {
            backgroundColor: '#Aa292d',
        }
    }

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
                />
                <FormControl size="small" margin="dense" error sx={{
                        backgroundColor: '#ffffff',
                        borderRadius: '0.5vw',
                        margin: '5px',
                        width: {md: '28vw', lg: '12vw'},     
                    }}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={handleClickShowPassword}>
                                {showPassword ? <VisibilityOff color="error" /> : <Visibility color="error" />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label='Password'
                    />
                </FormControl>
            </Grid>
            <Grid item alignSelf='flex-end' paddingX='2.5vw'>
                <Link color="#Aa292d" href='#' underline="none">
                    <Typography fontWeight='700' fontSize='1vw' onClick={() => dispatch(switchPage(1))}>Forgot password</Typography>
                </Link>
            </Grid>
            <Grid item width='20vw' paddingTop='5vh'>
                <Button fullWidth variant="contained" sx={loginButtonStyle} onClick={() => console.log('H')}> 
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