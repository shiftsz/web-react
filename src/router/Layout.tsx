import { HomeRounded, LogoutRounded } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import fetchSignoutAsync from '../store/features/auth/actions/fetchSignoutAsync'
import { useDispatch } from '../store/storeHooks'

const Layout: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSignout = () => {
        dispatch(fetchSignoutAsync())
    }

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
                    <IconButton
                        onClick={handleSignout}
                        edge="end"
                    >
                        <LogoutRounded />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar variant='dense' />
            <Outlet />
        </>
    )
}

export default Layout