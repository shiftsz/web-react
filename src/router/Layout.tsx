import { HomeRounded } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout: React.FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <AppBar
                color="default"
                position="fixed"
                elevation={0}
            >
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        onClick={() => navigate('/')}
                    >
                        <HomeRounded />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar variant='dense' />
            <Outlet />
        </>
    )
}

export default Layout