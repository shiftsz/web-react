import { Avatar, List, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAllEmployees } from '../hooks'
import EmployeeTypes from '../types'

const EmployeesList: React.FC = () => {
    const employees = useAllEmployees()
    const navigate = useNavigate()

    return (
        <List>
            {
                employees.map((employee, index) => (
                    <ListItemButton
                        key={index}
                        onClick={() => navigate(`/employees/${employee.id}`)}
                    >
                        <ListItemAvatar>
                            <Avatar src={employee.avatar} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={`${employee.forename} ${employee.surname}`}
                            secondary={`${EmployeeTypes.CreateEmployee.hebrewRole[employee.role.toUpperCase() as EmployeeTypes.RoleKey]}`}
                        />
                    </ListItemButton>
                ))
            }
        </List>
    )
}

export default EmployeesList