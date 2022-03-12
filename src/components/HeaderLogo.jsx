import '../style/headerLogo.scss'
import logoChatOne from '../img/logoChat_1.svg'
import logoChatTwo from '../img/logoChat_2.svg'

export const HeaderLogo = () => {
  return (
    <div className="logo">
      <p className="logo__one">
        <img
          style={{ width: '30px', height: '30px' }}
          src={logoChatOne}
          alt="Логотип анимация"
        />
      </p>
      <p className="logo__two">
        <img
          style={{ width: '30px', height: '30px' }}
          src={logoChatTwo}
          alt="Логотип анимация"
        />
      </p>
    </div>
  )
}
