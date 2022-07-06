import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './router/Layout'
import Home from './router/pages/Home'

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App