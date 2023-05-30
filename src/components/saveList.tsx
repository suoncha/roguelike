import { 
    Button,
    Link,
    Grid,
    Typography } from "@mui/material";
import { redButtonStyle } from "../styles/button";
import { useState } from "react";

import type { RootState } from "../store";
import { useDispatch, useSelector } from 'react-redux'
import { switchPage } from "../reducers/pageSwitch";
import { errorNof } from "../reducers/nofBar";
import { useEffect } from "react";
import { getGetUserInfo } from "../services/info";
import { SaveCard } from "./saveCard";

export const SaveList = () => {
    const dispatch = useDispatch()
    const [saveFile1, setFile1] = useState('');
    const [saveFile2, setFile2] = useState('');
    const [saveFile3, setFile3] = useState('');

    async function handleLogout() {
        localStorage.removeItem("gameToken")
        dispatch(switchPage(0))
    }

    useEffect(() => {
        const fetchData = async (token: String) => {
            try {
                const res = await getGetUserInfo(token);
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].saveNo == 0) {
                        setFile1(JSON.stringify(res.data[i]));
                    }
                    else if (res.data[i].saveNo == 1) {
                        setFile2(JSON.stringify(res.data[i]));
                    }
                    else {
                        setFile3(JSON.stringify(res.data[i]));
                    }
                }
            } catch (err) {
                dispatch(errorNof("Your credentials are expired, please re-login your account"))
            }
            
        }
        fetchData(localStorage.gameToken)
    },);

    return (
        <Grid container alignItems='center' direction='column'>
            <Grid item alignSelf='flex-start' paddingX='1vw' paddingTop='20vh'>
                <SaveCard></SaveCard>
                <Link color="#Aa292d"  underline="none">
                    <Typography fontWeight='900' fontSize='1vw'>{
                        saveFile1 ?
                        JSON.parse(saveFile1).level : 'null'
                    }</Typography>
                </Link>
                <Link color="#Aa292d"  underline="none">
                    <Typography fontWeight='900' fontSize='1vw'>{
                        saveFile2 ? 
                        JSON.parse(saveFile2).level : 'null'
                    }</Typography>
                </Link>
                <Link color="#Aa292d"  underline="none">
                    <Typography fontWeight='900' fontSize='1vw'>{
                        saveFile3 ? 
                        JSON.parse(saveFile3).level : 'null'
                    }</Typography>
                </Link>
            </Grid>
            <Grid item width='20vw' paddingTop='5vh'>
                <Button fullWidth variant="contained" sx={redButtonStyle} onClick={() => handleLogout()}>
                    LOG OUT
                </Button>
            </Grid>         
        </Grid>
    )
}