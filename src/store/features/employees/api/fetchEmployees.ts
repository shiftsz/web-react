import EmployeeTypes from "../types";

const fetchEmployees = (): Promise<EmployeeTypes.Employee[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 'E1',
                    avatar: '',
                    forename: 'איליה',
                    surname: 'קמילוב',
                    role: EmployeeTypes.Role.ADMIN
                }
            ])
        })
    })
}

export default fetchEmployees