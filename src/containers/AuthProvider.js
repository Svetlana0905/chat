import { createContext } from 'react'
import { useAuth } from './hooks/useAuth'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const { isAuth, email } = useAuth()
  const value = { isAuth, email }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
