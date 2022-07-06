import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './router/Layout'
import Home from './router/pages/Home'
import Signin from './router/pages/Signin'
import AuthProvider from './store/features/auth/components/AuthProvider'
import RedirectAuth from './store/features/auth/components/RedirectAuth'
import RequireAuth from './store/features/auth/components/RequireAuth'

const requireAuth = (element: JSX.Element): JSX.Element => {
    return (
        <RequireAuth>
            {element}
        </RequireAuth>
    )
}

const redirectAuth = (element: JSX.Element): JSX.Element => {
    return (
        <RedirectAuth>
            {element}
        </RedirectAuth>
    )
}

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={requireAuth(<Home />)} />
                </Route>
                <Route path="/signin" element={redirectAuth(<Signin />)} />
            </Routes>
        </AuthProvider>
    )
}

export default App