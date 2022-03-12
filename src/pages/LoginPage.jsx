import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/userSlice'
import { Form } from '../components/Form'
import { useContext } from 'react'
import { AuthContext } from '../containers/AuthProvider'

export const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const fromPage = location.state?.from?.pathname || '/'
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
        navigate(fromPage)
      })
      .catch(console.error)
  }
  console.log(useContext(AuthContext))
  return (
    <div>
      <h3>Войти</h3>
      <Form btnText="Войти" handleClick={userLogin} />
      <h3>Не зарегистрированы?</h3>
      <Link to="/register" className="link--btn">
        Зарегистрироваться
      </Link>
    </div>
  )
}
