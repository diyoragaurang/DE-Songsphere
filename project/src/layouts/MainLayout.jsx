import React from 'react'
import Sidebar from '../assets/components/sidebar/Sidebar'
import Header from '../assets/components/header/Header'
import { Grid } from '@mui/material'

const MainLayout = ({ children }) => {
    return (
        <>
            <Grid container>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10}>
                    <Header />
                    <div>
                        {children}
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default MainLayout
