import { AddRounded } from "@mui/icons-material"
import { useMediaQuery, SelectChangeEvent, IconButton, Dialog, DialogTitle, DialogContent, Stack, FormControl, InputLabel, Select, MenuItem, TextField, DialogActions, Button } from "@mui/material"
import React from "react"
import createEmployeeAsync from "../../../store/features/employees/actions/fetchCreateEmployeeAsync"
import EmployeeTypes from "../../../store/features/employees/types"
import useDispatch from "../../../store/hooks/useDispatch"

const CreateEmployeeDialog: React.FC = () => {
    const smallScreen = useMediaQuery('(max-width:600px)')
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState<boolean>(false)
    const [input, setInput] = React.useState<EmployeeTypes.CreateEmployee.Input>(EmployeeTypes.CreateEmployee.initialInput)

    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setInput(EmployeeTypes.CreateEmployee.initialInput)
        setOpen(false)
    }

    const handleCancel = () => handleClose()

    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        dispatch(createEmployeeAsync(input))
            .finally(handleClose)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.currentTarget.name]: e.currentTarget.value })
    }

    const handleSelectChange = (e: SelectChangeEvent) => {
        setInput({
            ...input,
            role: e.target.value as EmployeeTypes.Role
        })
    }

    const fieldsKeys = Object.keys(EmployeeTypes.CreateEmployee.inputFields) as EmployeeTypes.CreateEmployee.InputFieldsKeys[]
    const fields = EmployeeTypes.CreateEmployee.inputFields

    const isSelectField = (field: EmployeeTypes.CreateEmployee.InputField): field is EmployeeTypes.CreateEmployee.SelectField => field.type === 'select'

    return (
        <>
            <IconButton
                onClick={handleOpen}
            >
                <AddRounded />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                fullScreen={smallScreen}
                fullWidth={!smallScreen}
            >
                <DialogTitle>הוספת עובד</DialogTitle>
                <DialogContent>
                    <Stack spacing={1} mt={1}>
                        {
                            fieldsKeys.map((key, index) => {
                                const field = fields[key]

                                if (isSelectField(field)) {
                                    return (
                                        <FormControl
                                            key={index}
                                        >
                                            <InputLabel>{field.label}</InputLabel>
                                            <Select
                                                value={input[key]}
                                                onChange={handleSelectChange}
                                                name={key}
                                                label={field.label}
                                                key={index}
                                            >
                                                {
                                                    field.items.map((item, index) => (
                                                        <MenuItem
                                                            key={index}
                                                            divider={index + 1 !== field.items.length}
                                                            value={item.label}
                                                        >
                                                            {EmployeeTypes.CreateEmployee.hebrewRole[item.label as EmployeeTypes.RoleKey]}
                                                        </MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    )
                                }

                                return (
                                    <TextField
                                        key={index}
                                        type={field.type}
                                        value={input[key]}
                                        name={key}
                                        onChange={handleChange}
                                        label={field.label}
                                    />
                                )
                            })
                        }
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="text"
                        disableElevation
                        color="error"
                        onClick={handleCancel}
                    >בטל</Button>
                    <Button
                        variant="contained"
                        disableElevation
                        color="success"
                        onClick={handleSubmit}
                    >אישור</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CreateEmployeeDialog