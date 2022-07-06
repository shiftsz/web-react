import AuthTypes from "./authTypes"

export const fetchAuthRequest = (): Promise<AuthTypes.Payload> => {
    return new Promise<AuthTypes.Payload>((resolve) => {
        resolve({
            user: {
                forename: 'איליה',
                surname: 'קמילוב',
                id: 'testing1',
                role: {
                    label: 'מנהל',
                    level: 4,
                    value: 'admin'
                },
                username: '0503592156'
            },
            token: 'testing token'
        })
    })
}

export const fetchSignoutRequest = (): Promise<void> => {
    return new Promise((resolve) => {
        resolve()
    })
}