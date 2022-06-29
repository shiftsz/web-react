import { Alert, Avatar, Box, Button, CircularProgress, Container, CssBaseline, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import fetchSigninAsync from '../../store/features/auth/actions/fetchSigninAsync'
import AuthTypes from '../../store/features/auth/types'
import authValidators from '../../store/features/auth/validators'
import useDispatch from '../../store/hooks/useDispatch'

const Signin: React.FC = () => {
    const dispatch = useDispatch()
    const [input, setInput] = React.useState<AuthTypes.Signin.Input>(AuthTypes.Signin.initialInput)
    const [state, setState] = React.useState<AuthTypes.Signin.State>(AuthTypes.Signin.initialState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.currentTarget.name]: e.currentTarget.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        authValidators.validateInput(input, (error) => {
            if (error) return setState(AuthTypes.Signin.rejectedState(error))

            setState(AuthTypes.Signin.loadingState)
        })

        const request = await dispatch(fetchSigninAsync(input))
        if (request.meta.requestStatus === 'rejected' && request.meta.rejectedWithValue && typeof request.payload === 'string') {
            setState(AuthTypes.Signin.rejectedState(request.payload))
        }
    }

    const loading = state.status === AuthTypes.Status.PENDING

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    התחברות
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, mb: 1 }}>
                    <TextField
                        dir='rtl'
                        margin="normal"
                        required
                        fullWidth
                        label="שם משתמש"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={input.username}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="סיסמה"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={input.password}
                        onChange={handleChange}
                        inputProps={{
                            onKeyUp: (e) => e.key === 'Enter' && e.currentTarget.blur()
                        }}
                    />
                    <Stack alignItems="center">
                        <Button
                            type="submit"
                            disableElevation
                            fullWidth={!loading}
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                minHeight: 56,
                                minWidth: 0,
                                borderRadius:
                                    loading
                                        ? 999
                                        : 1,
                                transition: `width 400ms ease-in-out`
                            }}
                            disabled={(!input.username || !input.password) || loading}
                        >
                            {
                                loading
                                    ? <CircularProgress size={24} color='inherit' />
                                    : "התחבר"
                            }
                        </Button>
                    </Stack>
                </Box>
                {
                    state.error &&
                    <Alert severity='error' sx={{ width: '100%', minHeight: 56, display: 'flex', alignItems: 'center' }}>
                        {state.error}
                    </Alert>
                }
            </Box>
        </Container>
    )
}

export default Signin