import { Navigate, useLocation } from 'react-router-dom'

export const PrivatedAuth = ({ children }) => {
  const location = useLocation()
  const auth = true
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}
