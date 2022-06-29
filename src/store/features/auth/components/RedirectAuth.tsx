import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuthSelectors from '../hooks'

const RedirectAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const { fetched, user } = useAuthSelectors()
    const location = useLocation() as { state?: { from: Location } }

    const from = location.state?.from.pathname || '/'

    if (fetched && user) return <Navigate to={from} replace />

    return children
}

export default RedirectAuth