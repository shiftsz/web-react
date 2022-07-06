import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthUser } from '../authHooks'

const RequireAuth: React.FC<{ children: JSX.Element }> = (props) => {
    const location = useLocation()
    const user = useAuthUser()

    if (user) return props.children

    return <Navigate to="/signin" state={{ from: location }} replace />
}

export default RequireAuth