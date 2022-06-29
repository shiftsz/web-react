import { SerializedError } from "@reduxjs/toolkit"

namespace AuthTypes {
    export enum Status {
        IDLE = 'idle',
        PENDING = 'pending',
        FULFILLED = 'fulfilled',
        REJECTED = 'rejected'
    }
    export type User = {
        id: string
        forename: string
        surname: string
        role: string
    }

    export type Payload = {
        user: User
        token: string
    }

    export type State = {
        status: Status
        payload?: Payload
        error?: SerializedError
    }

    export type AccessToken = string

    export type FetchAuthPromise = Promise<Payload>

    export const sliceName = 'auth'

    export const initialState: State = {
        status: Status.IDLE
    }

    export namespace Signin {
        export const initialInput: Input = {
            password: '',
            username: ''
        }

        export type Input = {
            username: string
            password: string
        }

        export type State = {
            status: Status
            error?: string
        }

        export const rejectedState = (reason: string): State => {
            return {
                status: Status.REJECTED,
                error: reason
            }
        }

        export const loadingState: State = {
            status: Status.PENDING
        }

        export const initialState: State = {
            status: Status.IDLE
        }
    }
}

export default AuthTypes