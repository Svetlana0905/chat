import '../style/app.scss'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export const Layout = () => {
  return (
    <>
      <Header />
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
