import { HomeRounded } from '@mui/icons-material'
import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Layout: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div>
            <AppBar color="default" position='fixed' elevation={0}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        onClick={() => navigate('/')}
                    >
                        <HomeRounded />
                    </IconButton>
                    <Button component={Link} to="employees">עובדים</Button>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Outlet />
        </div>
    )
}

export default Layout