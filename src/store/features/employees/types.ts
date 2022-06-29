
namespace EmployeeTypes {
    export enum Status {
        IDLE = 'idle',
        PENDING = 'pending',
        FULFILLED = 'fulfilled',
        REJECTED = 'rejected'
    }

    export enum Role {
        EMPLOYEE = 'employee',
        MANAGER = 'manager',
        ADMIN = 'admin',
    }

    export type RoleKey = keyof typeof Role

    export type Employee = {
        id: string
        forename: string
        surname: string
        avatar: string
        role: Role | ""
    }

    export type State = {
        status: Status
    }

    export const sliceName = 'employees'

    export namespace CreateEmployee {
        export interface Input extends Omit<Employee, 'id'> {
            username: string
            password: string
        }

        export const initialInput: Input = {
            avatar: '',
            forename: '',
            password: '',
            role: '',
            surname: '',
            username: ''
        }

        export type TextField = {
            label: string
            type: 'text' | 'password'
        }
        export type SelectField = {
            label: string
            type: 'select'
            items: { value: string, label: string }[]
        }

        export type InputField = TextField | SelectField

        export type InputFields = {
            [K in keyof Omit<Input, 'avatar'>]: InputField
        }

        export type HebrewRole = {
            [K in RoleKey]: string
        }

        export const hebrewRole: HebrewRole = {
            ADMIN: 'מנהל מערכת',
            EMPLOYEE: 'עובד',
            MANAGER: 'מנהל משמרת'
        }

        export type InputFieldsKeys = keyof InputFields

        export const inputFields: InputFields = {
            forename: {
                label: 'שם פרטי',
                type: 'text'
            },
            surname: {
                label: 'שם משפחה',
                type: 'text'
            },
            username: {
                label: 'שם משתמש',
                type: 'text'
            },
            password: {
                label: 'סיסמה',
                type: 'password'
            },
            role: {
                label: 'תפקיד',
                type: 'select',
                items: Object.keys(Role).map((key, index) => {
                    return {
                        label: key,
                        value: Role[key as RoleKey]
                    }
                })
            }
        }
    }
}

export default EmployeeTypes