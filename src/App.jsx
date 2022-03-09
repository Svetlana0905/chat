import './style/app.scss'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'
import { Layout } from './components/Layout'

import { privateRoutes } from './components/routes'
import { PrivatedAuth } from './components/PrivatedAuth'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          {privateRoutes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={<PrivatedAuth>{Component()}</PrivatedAuth>}
            />
          ))}
        </Route>
      </Routes>
    </div>
  )
}

export default App
