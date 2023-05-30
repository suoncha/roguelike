import { Card, CardContent, Typography, Grid, Link, Button } from '@mui/material';

import { useDispatch } from 'react-redux'
import { setGame } from '../reducers/gameSet';
import { errorNof } from '../reducers/nofBar';
import { postCreateInfo, postDeleteInfo } from '../services/info';
import jwt_decode from "jwt-decode";


export const SaveCard = (props: any) => {
    const dispatch = useDispatch()

    async function handleCreate(saveNo: number) {
        try {
            const decode: any = jwt_decode(localStorage.gameToken)
            await postCreateInfo(decode.username, saveNo, localStorage.gameToken)
            props.refresh(localStorage.gameToken)
        } catch (err: any) {
            dispatch(errorNof("Your credentials are expired, please re-login your account"))
        }
    }

    async function handlePlay() {
        dispatch(setGame())
    }

    async function handleDelete(saveNo: number) {
        try {
            const decode: any = jwt_decode(localStorage.gameToken)
            await postDeleteInfo(decode.username, saveNo, localStorage.gameToken)
            props.refreshDelete(saveNo)
        } catch (err: any) {
            dispatch(errorNof("Your credentials are expired, please re-login your account"))
        }
    }

    if (props.child) return (
        <Card sx={{width: '20vw', height: '12vh'}}>   
            <CardContent>
                <Grid container alignItems='center' direction='row'>
                    <Grid>
                        <Typography fontSize='1.5vw' fontWeight='500'>
                            Save {props.saveNo}
                        </Typography>
                        
                        <Button variant="text" onClick={() => handlePlay()}>
                            <Typography sx={{color: '#C3171d'}} fontSize='1vw' fontWeight='900'>
                                Play
                            </Typography>
                        </Button>

                        <Button variant="text" onClick={() => handleDelete(props.saveNo)}>
                            <Typography sx={{color: '0E86D4'}} fontSize='1vw' fontWeight='900'>
                                Delete
                            </Typography>
                        </Button>
                    </Grid>
                    

                    <Grid paddingLeft='3vw'>
                        <Typography sx={{color: '#Aa292d'}} fontSize='0.7vw' fontWeight='900'>
                            level: {JSON.parse(props.child).level}
                        </Typography>
                        <Typography sx={{color: '#Aa292d'}} fontSize='0.7vw' fontWeight='900'>
                            death: {JSON.parse(props.child).death}
                        </Typography>
                        <Typography sx={{color: '#Aa292d'}} fontSize='0.7vw' fontWeight='900'>
                            coin: {JSON.parse(props.child).coin}
                        </Typography>
                        <Typography sx={{color: '#Aa292d'}} fontSize='0.7vw' fontWeight='900'>
                            maps: {JSON.parse(props.child).mapCleared}
                        </Typography>
                    </Grid>
                    
                </Grid>
            </CardContent>
        </Card>
    )
    else return ( 
        <Card sx={{width: '20vw', height: '12vh', backgroundColor: '#C3171d'}}>   
            <CardContent>
                <Typography fontSize='1.5vw' fontWeight='500' color='white'>
                    Save {props.saveNo}
                </Typography>     
                <Button variant="text" onClick={() => handleCreate(props.saveNo)}>
                    <Typography sx={{color: 'black'}} fontSize='1vw' fontWeight='900'>
                        Create
                    </Typography>
                </Button>
            </CardContent>
        </Card>
    )
}