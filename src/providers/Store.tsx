import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'

const Store: React.FC<{ children: JSX.Element }> = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default Store