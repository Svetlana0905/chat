import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Form } from '../components/Form'
import { addUser } from '../store/userSlice'
import { useContext } from 'react'
import { AuthContext } from '../containers/AuthProvider'

export const RegisterPage = () => {
  // const navigate = useNavigate()
  // const location = useLocation()
  const dispatch = useDispatch()

  const userRegister = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
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
      <div>Register page</div>
      <p>Страница регистрации</p>
      <Form btnText="login" handleClick={userRegister} />
      {/* {fromPage} */}
    </div>
  )
}
