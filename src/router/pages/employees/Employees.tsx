import React from 'react'
import EmployeesList from '../../../store/features/employees/components/EmployeesList'
import CreateEmployeeDialog from './CreateEmployeeDialog'

const Employees: React.FC = () => {

    return (
        <div>
            <h1>Employees</h1>
            <CreateEmployeeDialog />
            <EmployeesList />
        </div>
    )
}

export default Employees