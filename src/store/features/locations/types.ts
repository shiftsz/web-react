
namespace LocationsTypes {
    export enum Status {
        IDLE = 'idle',
        PENDING = 'pending',
        FULFILLED = 'fulfilled',
        REJECTED = 'rejected'
    }

    export type LocationMeta = {
        minimumEmployees: number
        defaultTime: string
        displayOrder: number
    }

    export type Location = {
        id: string
        label: string
        meta?: Partial<LocationMeta>
    }

    export type State = {
        status: Status
    }

    export const sliceName = 'locations'
}

export default LocationsTypes