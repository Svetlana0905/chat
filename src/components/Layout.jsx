import '../style/app.scss'
import { Outlet, NavLink } from 'react-router-dom'

const setActive = ({ isActive }) => (isActive ? 'active--link' : 'white')
export const Layout = () => {
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
            <NavLink to="profile" className={setActive}>
              Личный кабинет
            </NavLink>
            <NavLink to="login" className={setActive}>
              Зарегистрироваться
            </NavLink>
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
