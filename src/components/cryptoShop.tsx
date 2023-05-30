import { 
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, 
    Typography,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Grid,
    Box
} from '@mui/material'
import { blueButtonStyle, redButtonStyle } from '../styles/button';
import { useState } from 'react';

import type { RootState } from "../store";
import { useDispatch, useSelector } from 'react-redux'
import { closeCryptoShop, connectMetamask } from '../reducers/barSet';
import { successNof, errorNof } from '../reducers/nofBar';

export const CryptoShop = () => {
    const dispatch = useDispatch()
    const shopStatus = useSelector((state: RootState) => state.bar.cryptoShop)
    const metamaskStatus = useSelector((state: RootState) => state.bar.metamask)

    function handleClose() {
        dispatch(closeCryptoShop())
    };

    async function handleConnect() {
        dispatch(connectMetamask())
    }

    if (metamaskStatus) return (
        <Dialog open={shopStatus} onClose={handleClose} fullWidth>
            <DialogTitle>
                <Typography fontSize='2vw' fontWeight='900'>
                    Crypto Shop
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Typography fontSize='1vw' fontWeight='700'>
                    You can buy items to use in game here
                </Typography>


      <Grid container direction='row' >

<Grid item>

                <Card sx={{ maxWidth: '10vw' }}>
      <CardContent>
      <Grid container alignItems='center' direction='column'>
        <Grid item>
        <Box sx={{ width: '8vw'}}
                    component="img"
                    src="/images/itemLollipop.png"
                    ></Box>
        </Grid>
                    
                </Grid>
        <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
          Lollipop
        </Typography>
        <Grid container alignItems='center' direction='column'>
        <Button disabled size='small' variant="contained" sx={redButtonStyle} onClick={() => handleClose()}> 
                    Owned
                </Button>
        </Grid>
      </CardContent>
    </Card>
    

    </Grid>

    </Grid>

            </DialogContent>
            <DialogActions>
                <Button variant="contained" sx={blueButtonStyle} onClick={() => handleClose()}> 
                    Close
                </Button>
                <Button variant="contained" sx={redButtonStyle} onClick={() => handleConnect()}> 
                    Connect MetaMask
                </Button>
            </DialogActions>
        </Dialog>
    )
    else return (
        <Dialog open={shopStatus} onClose={handleClose} fullWidth>
        <DialogTitle>
            <Typography fontSize='2vw' fontWeight='900'>
                Crypto Shop
            </Typography>
        </DialogTitle>

        <DialogContent>
            <Typography fontSize='1vw' fontWeight='700'>
                You haven't connected to Metamask
            </Typography>
        </DialogContent>

        <DialogActions>
            <Button variant="contained" sx={blueButtonStyle} onClick={() => handleClose()}> 
                Close
            </Button>
            <Button variant="contained" sx={redButtonStyle} onClick={() => handleConnect()}> 
                Connect MetaMask
            </Button>
        </DialogActions>
    </Dialog>
    )
}