import React from 'react'
import useDispatch from '../../../hooks/useDispatch'
import fetchAuthAsync from '../actions/fetchAuthAsync'
import useAuthSelectors from '../hooks'

const AuthProvider: React.FC<{ children: JSX.Element }> = (props) => {
    const dispatch = useDispatch()
    const { fetched } = useAuthSelectors()

    React.useEffect(() => {
        dispatch(fetchAuthAsync())
    }, [dispatch])

    if (fetched) return props.children

    return <div>Loading</div>
}

export default AuthProvider