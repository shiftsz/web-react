import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuthSelectors from '../hooks'

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const { fetched, user } = useAuthSelectors()
    const location = useLocation()

    if (fetched && user) return children

    return <Navigate to="/signin" state={{ from: location }} replace />
}

export default RequireAuth