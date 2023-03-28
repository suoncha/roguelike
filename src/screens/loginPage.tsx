import React, {useState, useEffect} from "react";
import { 
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Paper,
    Box,
    Grid,
    Typography,
    Container } from "@mui/material";

import type { RootState } from "../store";
import { useSelector, useDispatch } from 'react-redux'
import { Copyright } from "../components/copyright";

export const LoginPage = () => {

    const loginButtonStyle = {
      mt: 3,
      mb: 3,
      backgroundColor: '#C3171d',
      '&:hover': {
          backgroundColor: '#Aa292d',
      }
    }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
    };
    //const count = useSelector((state: RootState) => state.width.value)
    //const dispatch = useDispatch()
    //dispatch(getSize())

    return (
        <Grid container sx={{ height: '100vh', width: '100vw' }}>
        <Grid
          item
          xs={false}
          md={8}
          lg={9}
          sx={{
            backgroundImage: 'url(/images/splash4.jpeg)',
            //backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} md={4} lg={3} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 2,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
              <img src="/images/logo.png"></img>
            <Typography component="h1" variant="h5">
              Hello again
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={loginButtonStyle}
              >
                LOGIN
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    )
}
