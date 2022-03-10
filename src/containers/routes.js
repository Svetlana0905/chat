import { LOGIN_ROUTE, CHAT_ROUTE, PROFILE_ROUTE } from './path/consts'
import { Chat } from '../pages/Chat'
import { Profile } from '../pages/Profile'
import { LoginPage } from '../pages/LoginPage'

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage
  }
]
export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat
  },
  {
    path: PROFILE_ROUTE,
    Component: Profile
  }
]
