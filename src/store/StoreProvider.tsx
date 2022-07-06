import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import store from '.'

const StoreProvider: React.FC<PropsWithChildren> = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default StoreProvider