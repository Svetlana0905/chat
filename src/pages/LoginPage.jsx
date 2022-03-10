// import { useLocation } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/userSlice'
import { Form } from '../components/Form'
import { useContext } from 'react'
import { AuthContext } from '../containers/AuthProvider'

export const LoginPage = () => {
  // const navigate = useNavigate()
  // const location = useLocation()
  const dispatch = useDispatch()

  const userLogin = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          addUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid
          })
        )
      })
      .catch(console.error)
  }
  console.log(useContext(AuthContext))
  // const fromPage = location.state?.from?.pathname || '/'
  return (
    <div>
      <p>Страница залогиниться, войти</p>
      <Form btnText="register" handleClick={userLogin} />
      {/* {fromPage} */}
    </div>
  )
}
