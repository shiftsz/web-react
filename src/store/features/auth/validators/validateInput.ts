import AuthTypes from "../types";

const validateInput = (input: AuthTypes.Signin.Input, next: (error?: string) => void) => {
    if (!input.password && !input.username) return next('כל השדות חובה.')

    return next()
}

export default validateInput