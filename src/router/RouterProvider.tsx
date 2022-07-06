import React, { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'

const RouterProvider: React.FC<PropsWithChildren> = (props) => {
    return (
        <BrowserRouter>
            {props.children}
        </BrowserRouter>
    )
}

export default RouterProvider