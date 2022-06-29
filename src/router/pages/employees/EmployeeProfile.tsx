import { Avatar, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEmployee } from '../../../store/features/employees/hooks'

const EmployeeProfile: React.FC = () => {
    const { id } = useParams()
    const employee = useEmployee(id!)

    if (!employee) return <div>Not found.</div>

    return (
        <div>
            <Avatar src={employee?.avatar} />
            <Typography variant="h6">{employee.forename} {employee.surname}</Typography>
        </div>
    )
}

export default EmployeeProfile