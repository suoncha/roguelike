import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, 
    Typography,
    Box,
    Grid,
    IconButton,
} from '@mui/material'
import { blueButtonStyle } from '../styles/button';

import type { RootState } from "../store";
import { useDispatch, useSelector } from 'react-redux'
import { closeAbout } from '../reducers/barSet';
import { Facebook, GitHub, LinkedIn } from '@mui/icons-material';

export const AboutDialog = () => {
    const dispatch = useDispatch()
    const aboutStatus = useSelector((state: RootState) => state.bar.about)
    
    function handleClose() {
        dispatch(closeAbout())
    };

    return (
        <Dialog open={aboutStatus} onClose={handleClose} fullWidth>
            <DialogTitle>
                <Typography fontSize='2vw' fontWeight='900'>
                    About us
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Typography fontSize='1vw' fontWeight='700'>
                    Welcome to Virtue! This is C2 & Thomas. In order to 
                    give a brief summary of this project, we'd like to partition
                    our whole story into 6 sections based on the Six W's.
                </Typography>
            <Grid container alignItems='center' direction='column'>
                <Grid item paddingTop='2vh'>
                    <Box sx={{ width: '35vw', alignSelf: 'center'}}
                    component="img"
                    src="/images/intro.png"
                    ></Box>
                </Grid>
                <Grid item>
                    <Typography fontSize='2vw' fontWeight='900'>
                        Why?
                    </Typography>
                </Grid>
                <Grid item alignSelf='flex-start'>
                    <Typography fontSize='1vw' fontWeight='700'>
                        Our university has a mandatory subject which is called
                        Graduation Project. As the name of its already said it all,
                        it's required for us to come up with a topic, write a whole essay
                        about it and turn it into reality. Lucky for us, there's a lecturer
                        who teaches game-related subjects in our school. He has a great 
                        influence on our decision to choose a gaming topic. On top of that, 
                        HTML5 games are kinda trendy recently thanks to the rise of Metaverse
                        & Blockchain games. All of these contribute to the fact that we ended up
                        doing this as a result.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography fontSize='2vw' fontWeight='900'>
                        What?
                    </Typography>
                </Grid>
                <Grid item alignSelf='flex-start'>
                    <Typography fontSize='1vw' fontWeight='700'>
                        So what does Virtue mean? Since both of our's real names are Vũ and there're
                        two of us, we come up with Virtue as a wordplay of Vũ and Two.
                        Virtue is a 3D Rogue-lite game (I do mind explaning what are Rogue-lite games here,
                        you can research about it on the internet or just play the game) which can be played
                        completely on the browser. You can play as guest or create an account to save 
                        your progress, and I'd recommend you to do so.
                    </Typography>
                    <Typography fontSize='1vw' fontWeight='700'>
                        What makes this game special? Well the majority of games out there have a constant
                        , fixed difficulty increase, which could result in the game becoming too hard or too
                        easy for some players. Virtue solves that problem by creating a dynamic difficulty increase
                        (or decrease if you are such a noob) that could alter gameplay based on how good players perform.
                        Our goal is to create a balanced and fair enjoyment for everyone.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography fontSize='2vw' fontWeight='900'>
                        Where?
                    </Typography>
                </Grid>
                <Grid item alignSelf='flex-start'>
                    <Typography fontSize='1vw' fontWeight='700'>
                        We have started doing this since January, when we are not working our fulltime jobs and 
                        side hustle (yes we do be a part of a startup team). That messed up our 
                        sleep schedule quite a lot, sometimes I wonder why I'm still alive.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography fontSize='2vw' fontWeight='900'>
                        How?
                    </Typography>
                </Grid>
                <Grid item alignSelf='flex-start'>
                    <Typography fontSize='1vw' fontWeight='700'>
                        Lots of research, time and effort. This project's main techstack is Unity, 
                        React and NestJS. I'm gonna share the whole 100 pages long essay after finish it.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography fontSize='2vw' fontWeight='900'>
                        Who?
                    </Typography>
                </Grid> 
                <Grid item>
                    <Typography textAlign={'center'} fontSize='1.2vw' fontWeight='700'>
                        Thomas
                    </Typography>
                    <Grid direction='row'>
                        <IconButton href='https://github.com/jesuisjohan'>
                            <GitHub></GitHub>
                        </IconButton>
                        <IconButton href='https://www.facebook.com/anhvu.maihoang.5'>
                            <Facebook></Facebook>
                        </IconButton>
                        <IconButton href='https://www.linkedin.com/in/mai-hoang-anh-vu/'>
                            <LinkedIn></LinkedIn>
                        </IconButton>
                    </Grid>
                    <Typography textAlign={'center'} fontSize='1.2vw' fontWeight='700'>
                        C2
                    </Typography>
                    <Grid direction='row'>
                        <IconButton href='https://github.com/suoncha'>
                            <GitHub></GitHub>
                        </IconButton>
                        <IconButton href='https://www.facebook.com/ph.kayn'>
                            <Facebook></Facebook>
                        </IconButton>
                        <IconButton href='https://www.linkedin.com/in/phvu2301/'>
                            <LinkedIn></LinkedIn>
                        </IconButton>
                    </Grid>
                </Grid>      
            </Grid>
                
            </DialogContent>
            <DialogActions>
                <Button variant="contained" sx={blueButtonStyle} onClick={() => handleClose()}> 
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}