import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthUser } from '../authHooks'

const RedirectAuth: React.FC<{ children: JSX.Element }> = (props) => {
    const location = useLocation() as { state: { from: Location } }
    const user = useAuthUser()

    if (!user) return props.children

    return <Navigate to={location.state?.from || '/'} replace />
}

export default RedirectAuth