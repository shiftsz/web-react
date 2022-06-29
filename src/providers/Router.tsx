import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const Router: React.FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}

export default Router