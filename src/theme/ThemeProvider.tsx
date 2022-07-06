import React, { PropsWithChildren } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import theme from '.'

const ThemeProvider: React.FC<PropsWithChildren> = (props) => {
    return (
        <MuiThemeProvider theme={theme}>
            {props.children}
        </MuiThemeProvider>
    )
}

export default ThemeProvider