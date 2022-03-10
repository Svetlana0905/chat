import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'

export const PrivatedAuth = ({ children }) => {
  const location = useLocation()
  const { isAuth } = useAuth()

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}
