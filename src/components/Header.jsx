import '../style/header.scss'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/userSlice'
import { useAuth } from '../containers/hooks/useAuth'
import { HeaderLogo } from '../components/HeaderLogo'

const setActive = ({ isActive }) => (isActive ? 'active--link' : 'nav--link')

export const Header = () => {
  const dispatch = useDispatch()
  const { isAuth } = useAuth()
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <HeaderLogo />
          <NavLink to="/" className={setActive}>
            Домой
          </NavLink>
          <NavLink to="chat" className={setActive}>
            Перейти в чат
          </NavLink>
          {isAuth ? (
            <>
              <NavLink to="profile" className={setActive}>
                Личный кабинет
              </NavLink>
              <button
                className="log--out"
                onClick={() => dispatch(removeUser())}>
                Выйти
              </button>
            </>
          ) : (
            <>
              <NavLink to="login" className={setActive}>
                Войти
              </NavLink>
              <NavLink to="register" className={setActive}>
                Зарегистрироваться
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
