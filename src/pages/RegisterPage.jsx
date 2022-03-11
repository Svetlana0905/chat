import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Form } from '../components/Form'
import { addUser } from '../store/userSlice'
import { AuthContext } from '../containers/AuthProvider'

export const RegisterPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const fromPage = location.state?.from?.pathname || '/'
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
        navigate(fromPage)
      })
      .catch(console.error)
  }
  console.log(useContext(AuthContext))
  return (
    <div>
      <div>Register page</div>
      <p>Страница регистрации</p>
      <Form btnText="Зарегистрироваться" handleClick={userRegister} />
      {fromPage}
    </div>
  )
}
