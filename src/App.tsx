import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './router/Layout'
import CreateEmployee from './router/pages/employees/CreateEmployee'
import EditEmployee from './router/pages/employees/EditEmployee'
import EmployeeProfile from './router/pages/employees/EmployeeProfile'
import Employees from './router/pages/employees/Employees'
import Home from './router/pages/Home'
import Signin from './router/pages/Signin'
import AuthProvider from './store/features/auth/components/AuthProvider'
import RedirectAuth from './store/features/auth/components/RedirectAuth'
import RequireAuth from './store/features/auth/components/RequireAuth'
import EmployeesProvider from './store/features/employees/components/EmployeesProvider'

const App: React.FC = () => {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }>
          <Route index element={<Home />} />
          <Route path="employees">
            <Route index element={
              <EmployeesProvider>
                <Employees />
              </EmployeesProvider>
            } />
            <Route path="create" element={<CreateEmployee />} />
            <Route path="edit/:id" element={<EditEmployee />} />
            <Route path=":id" element={<EmployeeProfile />} />
          </Route>
        </Route>
        <Route path="signin" element={
          <RedirectAuth>
            <Signin />
          </RedirectAuth>
        }
        />
      </Routes>
    </AuthProvider>
  )
}

export default App