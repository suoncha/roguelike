import { 
    Button,
    Link,
    Grid,
    Typography,
    FormControl,
    InputLabel,
    InputAdornment,
    OutlinedInput,
    IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux'
import { useState } from "react";
import { switchPage } from "../reducers/pageSwitch";

export const Forgot3 = () => {
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
            <Grid item alignSelf='flex-start' paddingX='1vw' paddingTop='20vh'>
                <Link color="#Aa292d"  underline="none">
                    <Typography fontWeight='900' fontSize='1vw'>Enter your new password</Typography>
                </Link>
            </Grid>
            <FormControl size="small" margin="dense" error sx={{
                        backgroundColor: '#ffffff',
                        borderRadius: '0.5vw',
                        margin: '5px',
                        width: {md: '28vw', lg: '26vw'},     
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
            <Grid item alignSelf='flex-start' paddingX='1vw' paddingTop='0vh'>
                <Link color="#Aa292d"  underline="none">
                    <Typography fontWeight='900' fontSize='1vw'>Re-enter your new password</Typography>
                </Link>
            </Grid>
            <FormControl size="small" margin="dense" error sx={{
                        backgroundColor: '#ffffff',
                        borderRadius: '0.5vw',
                        margin: '5px',
                        width: {md: '28vw', lg: '26vw'},     
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
            <Grid item width='20vw' paddingTop='2vh'>
                <Button fullWidth variant="contained" sx={loginButtonStyle} onClick={() => dispatch(switchPage(0))}>
                    NEXT 
                </Button>
            </Grid>           
        </Grid>
    )
}