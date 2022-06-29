import React from 'react'
import useDispatch from '../../../hooks/useDispatch'
import useSelector from '../../../hooks/useSelector'
import fetchEmployeesAsync from '../actions/fetchEmployeesAsync'
import { useAllEmployees } from '../hooks'
import EmployeeTypes from '../types'

const EmployeesProvider: React.FC<{ children: JSX.Element }> = (props) => {
    const allEmployees = useAllEmployees()
    const status = useSelector(state => state.employees.status)
    const dispatch = useDispatch()

    React.useEffect(() => {
        allEmployees.length === 0 && dispatch(fetchEmployeesAsync())
    }, [dispatch, allEmployees])

    if (status === EmployeeTypes.Status.FULFILLED) return props.children

    return <div>loading</div>
}

export default EmployeesProvider