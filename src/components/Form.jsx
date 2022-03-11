import '../style/form.scss'
import { useState } from 'react'

export const Form = ({ btnText, handleClick }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const getEmail = (e) => {
    const valueEmail = e.target.value.toLowerCase().trim()
    setEmail(valueEmail)
  }
  const getPassword = (e) => {
    const valuePassword = e.target.value.toLowerCase().trim()
    setPassword(valuePassword)
  }
  const addUser = (e) => {
    e.preventDefault()
    if (email && password) {
      handleClick(email, password)
    }
    setEmail('')
    setPassword('')
  }
  return (
    <form onSubmit={addUser} className="form">
      <label className="form__label">
        <span className="form__span">email</span>
        <input
          type="email"
          value={email}
          onChange={getEmail}
          className="form__input"
        />
      </label>
      <label className="form__label">
        <span className="form__span">password</span>
        <input
          type="password"
          value={password}
          onChange={getPassword}
          className="form__input"
        />
      </label>
      <button type="submit" className="form__btn">
        {btnText}
      </button>
    </form>
  )
}
