import EmployeeTypes from "../types";

const createEmployee = (input: EmployeeTypes.CreateEmployee.Input): Promise<EmployeeTypes.Employee> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve({
                ...input,
                id: 'testing_' + Math.random()
            })
        })
    })
}

export default createEmployee