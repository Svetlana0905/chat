import '../style/app.scss'
import { Outlet, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/userSlice'
import { useAuth } from '../containers/hooks/useAuth'

const setActive = ({ isActive }) => (isActive ? 'active--link' : 'white')
export const Layout = () => {
  const dispatch = useDispatch()
  const { isAuth } = useAuth()
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
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
                <button onClick={() => dispatch(removeUser())}>Выйти</button>
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
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>20022 Footer</p>
        </div>
      </footer>
    </>
  )
}
