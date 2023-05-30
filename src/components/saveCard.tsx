import { Card, CardContent, Typography, Grid, Link } from '@mui/material';
import { useState } from "react";

import { useDispatch } from 'react-redux'
import { errorNof } from '../reducers/nofBar';
import { postCreateInfo } from '../services/info';
import jwt_decode from "jwt-decode";

export const SaveCard = (props: any) => {
    const dispatch = useDispatch()
    const [createNew, setCreateNew] = useState(false);

    async function handleCreate(saveNo: number) {
        try {
            const decode: any = jwt_decode(localStorage.gameToken)
            await postCreateInfo(decode.username, saveNo, localStorage.gameToken)
            setCreateNew(true)
        } catch (err: any) {
            dispatch(errorNof("Your credentials are expired, please re-login your account"))
        }
    }

    if (props.child || createNew) return (
        <Card sx={{width: '20vw', height: '12vh'}}>   
            <CardContent>
                <Grid container alignItems='center' direction='row'>
                <Typography fontSize='1.5vw' fontWeight='500'>
                    Save {props.saveNo}
                </Typography>
                <Grid item container direction='column' paddingLeft='3vw'>
                    <Typography sx={{color: '#Aa292d'}} fontSize='0.7vw' fontWeight='900'>
                        level: {JSON.parse(props.child).level}
                    </Typography>
                    <Typography sx={{color: '#Aa292d'}} fontSize='0.7vw' fontWeight='900'>
                        death: {JSON.parse(props.child).death}
                    </Typography>
                </Grid>
                <Grid item container direction='column' paddingLeft='1vw'>
                    <Typography sx={{color: '#Aa292d'}} fontSize='0.7vw' fontWeight='900'>
                        coin: {JSON.parse(props.child).coin}
                    </Typography>
                    <Typography sx={{color: '#Aa292d'}} fontSize='0.7vw' fontWeight='900'>
                        maps: {JSON.parse(props.child).mapCleared}
                    </Typography>
                </Grid>
                <Grid item container direction='column' paddingLeft='4vw'>
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
        <Card sx={{width: '20vw', height: '12vh'}}>   
            <CardContent>
                <Typography fontSize='1.5vw' fontWeight='500'>
                    Save {props.saveNo}
                </Typography>     
                <Link color="#Aa292d" href='#' underline="none" onClick={() => handleCreate(props.saveNo)}>
                    <Typography sx={{color: '#C3171d'}} fontSize='1vw' fontWeight='900'>
                    Create
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}