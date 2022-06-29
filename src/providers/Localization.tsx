import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const Localization: React.FC<{ children: JSX.Element }> = (props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            {props.children}
        </LocalizationProvider>
    )
}

export default Localization