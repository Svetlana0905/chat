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
    <form onSubmit={addUser}>
      <label>
        <span>email</span>
        <input type="email" value={email} onChange={getEmail} />
      </label>
      <label>
        <span>password</span>
        <input type="password" value={password} onChange={getPassword} />
      </label>
      <button type="submit">{btnText}</button>
    </form>
  )
}
