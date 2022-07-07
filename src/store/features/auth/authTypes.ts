import { SerializedError } from "@reduxjs/toolkit"
import RootTypes from "../../rootTypes"

namespace AuthTypes {
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

    export type FulFilledState = RootTypes.FulFilledState<Payload>

    export type RejectedState = RootTypes.RejectedState<SerializedError>

    export type State = RootTypes.State<AuthTypes.RejectedState, AuthTypes.FulFilledState>
}

export default AuthTypes