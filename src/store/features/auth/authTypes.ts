import { SerializedError } from "@reduxjs/toolkit"

namespace AuthTypes {
    export enum Status {
        IDLE = 'idle',
        PENDING = 'pending',
        FULFILLED = 'fulfilled',
        REJECTED = 'rejected'
    }

    export type Role = {
        level: number
        value: string
        label: string
    }

    export type User = {
        id: string
        username: string
        forename: string
        surname: string
        role: Role
    }

    export type Payload = {
        user: User
        token: string
    }

    export type IdleState = {
        status: Status.IDLE
    }

    export type PendingState = {
        status: Status.PENDING
    }

    export type FulFilledState = {
        status: Status.FULFILLED,
        payload: Payload
    }

    export type RejectedState = {
        status: Status.REJECTED,
        reason: string
        error: SerializedError
    }

    export type State = IdleState | PendingState | FulFilledState | RejectedState
}

export default AuthTypes