import { Card, CardContent, Typography, CardActionArea, Grid, Link } from '@mui/material';

import { useDispatch } from 'react-redux'
import { openChangelog, openLastVersion } from '../reducers/barSet';
import jwt_decode from "jwt-decode";
import { postCreateInfo } from '../services/info';

export const SaveCard = (props: any) => {
    const dispatch = useDispatch()

    async function handleCreate(saveNo: number) {
        try {
            const decode = jwt_decode(localStorage.gameToken)
            const usernam = decode.username
            await postCreateInfo(decode.username, saveNo, localStorage.gameToken);
        } catch (err: any) {
        }
    }

    if (props.child) return (
        <Card sx={{width: '20vw'}}>   
            <CardContent>
                <Grid container alignItems='center' direction='row'>
                <Typography fontSize='1.5vw' fontWeight='500'>
                    {props.saveNo}
                </Typography>
                <Grid item direction='column' paddingLeft='3vw'>
                    <Typography sx={{color: '#Aa292d'}} fontSize='0.7vw' fontWeight='900'>
                        level: {JSON.parse(props.child).level}
                    </Typography>
                    <Typography sx={{color: '#Aa292d'}} fontSize='0.7vw' fontWeight='900'>
                        death: {JSON.parse(props.child).death}
                    </Typography>
                </Grid>
                <Grid item direction='column' paddingLeft='1vw'>
                    <Typography sx={{color: '#Aa292d'}} fontSize='0.7vw' fontWeight='900'>
                        coin: {JSON.parse(props.child).coin}
                    </Typography>
                    <Typography sx={{color: '#Aa292d'}} fontSize='0.7vw' fontWeight='900'>
                        maps: {JSON.parse(props.child).mapCleared}
                    </Typography>
                </Grid>
                <Grid item direction='column' paddingLeft='4vw'>
                    <Link color="#Aa292d" href='#' underline="none" onClick={() => console.log()}>
                        <Typography sx={{color: '#C3171d'}} fontSize='0.7vw' fontWeight='900'>
                        Play
                        </Typography>
                    </Link>
                    <Link color="#Aa292d" href='#' underline="none" onClick={() => console.log()}>
                        <Typography sx={{color: '#0E86D4'}} fontSize='0.7vw' fontWeight='900'>
                        Delete
                        </Typography>
                    </Link>
                </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
    else return ( 
        <Card sx={{width: '20vw'}}>   
            <CardContent>
                <Grid container alignItems='center' direction='row'>
                <Typography fontSize='1.5vw' fontWeight='500'>
                    {props.saveNo}
                </Typography>
                <Grid item direction='column' paddingLeft='13vw'>
                    <Link color="#Aa292d" href='#' underline="none" onClick={() => handleCreate(props.saveNo)}>
                        <Typography sx={{color: '#C3171d'}} fontSize='1vw' fontWeight='900'>
                        Create
                        </Typography>
                    </Link>
                </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}