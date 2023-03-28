import { Box, Typography } from "@mui/material";
import { Copyright } from "../components/copyright";

export const MobilePage = () => {
    return (
        <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center"
        sx={{
            backgroundColor: '#4b878b',
            //backgroundImage: 'url(/images/splash1.jpeg)'
        }}
        >
            <Box paddingTop="5vh" >
                <img width="200vw" src="/images/logo.png"></img>
            </Box>
            <Box>
                <img width="250vw" src="/images/mobile-notif.png"></img>
            </Box>
            <Box paddingTop="2vh" >
                <Typography color="white" align="center">
                    This game is not available for mobile
                </Typography>
                <Typography color="white" align="center">
                    Please open this website on a PC
                </Typography>
            </Box>
            <Box paddingTop="12vh">
                <Copyright/>
            </Box>
        </Box>
    )
}
