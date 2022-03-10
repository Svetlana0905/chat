import './style/app.scss'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { HomePage } from './pages/HomePage'
import { Layout } from './pages/Layout'

import { privateRoutes } from './containers/routes'
import { PrivatedAuth } from './containers/PrivatedAuth'
import { AuthProvider } from './containers/AuthProvider'

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            {privateRoutes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={<PrivatedAuth>{Component()}</PrivatedAuth>}
              />
            ))}
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
