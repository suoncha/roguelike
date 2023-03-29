import { 
    Button,
    TextField,
    Link,
    Grid,
    Typography } from "@mui/material";
import { useDispatch } from 'react-redux'
import { switchPage } from "../reducers/pageSwitch";

export const Forgot2 = () => {
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
                    <Typography fontWeight='900' fontSize='1vw'>Enter your OTP code</Typography>
                </Link>
            </Grid>
            <Grid item>
                <TextField size='small' label="OTP" autoComplete="one-time-code" error sx={{
                        backgroundColor: '#ffffff',
                        borderRadius: '0.5vw',
                        margin: '5px',
                        width: {md: '28vw', lg: '26vw'},
                    }}
                />
            </Grid>
            <Grid item alignSelf='flex-end' paddingX='2.5vw'>
                <Link color="#Aa292d" href='#' underline="none">
                    <Typography fontWeight='700' fontSize='1vw'>Resend</Typography>
                </Link>
            </Grid>  
            <Grid item width='20vw' paddingTop='2vh'>
                <Button fullWidth variant="contained" sx={loginButtonStyle} onClick={() => dispatch(switchPage(3))}>
                    NEXT 
                </Button>
            </Grid>  
            <Grid item alignSelf='flex-end' paddingX='2.5vw' paddingTop='0.5vh'>
                <Link color="#Aa292d" href='#' underline="none" onClick={() => dispatch(switchPage(1))}>
                    <Typography fontWeight='700' fontSize='1vw'>Go back</Typography>
                </Link>
            </Grid>          
        </Grid>
    )
}