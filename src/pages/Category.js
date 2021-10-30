import React from 'react';
import { Button, Grid } from "@mui/material";
import CategoryCard from "../components/CategoryCard";
import SkinTone from '../components/SkinTone';


export default function () {
    return (
        <Grid container style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: '20px'
        }}>
            <Grid item style={{
                padding: '10px',
            }}>
                <Button style={{
                    background: '#EDCBBD',
                    padding: '10px',
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px'
                }}></Button>
            </Grid>

            <Grid item style={{
                padding: '10px'
            }}>
                <Button style={{
                    background: '#e1bc9d',
                    padding: '10px',
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px'
                }}></Button>
            </Grid>

            <Grid item style={{
                padding: '10px'
            }} >
                <Button style={{
                    background: '#d2996c',
                    padding: '10px',
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px'
                }}></Button>
            </Grid>


            <Grid item style={{
                padding: '10px'
            }}>
                <Button style={{
                    background: '#d59c6e',
                    padding: '10px',
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px'
                }}></Button>
            </Grid>

            <Grid item style={{
                padding: '10px'
            }}>
                <Button style={{
                    background: '#906B4D',
                    padding: '10px',
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px'
                }}></Button>
            </Grid>

            <Grid item style={{
                padding: '10px'
            }} >
                <Button style={{
                    background: '#b6683e',
                    padding: '10px',
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px'
                }}></Button>
            </Grid>

            <Grid item style={{
                padding: '10px'
            }} >
                <Button style={{
                    background: '#9d5839',
                    padding: '10px',
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px'
                }}></Button>
            </Grid>

            <Grid item style={{
                padding: '10px'
            }} >
                <Button style={{
                    background: '#582f26',
                    padding: '10px',
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px'
                }}></Button>
            </Grid>

        </Grid>
    )
}