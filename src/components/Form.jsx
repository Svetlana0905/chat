import '../style/form.scss'
import { useForm } from 'react-hook-form'

export const Form = ({ btnText, handleClick }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit = (data) => {
    handleClick(data.email, data.password)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label className="form__label">
        <span className="form__span">email *</span>
        <input
          type="email"
          className="form__input"
          {...register('email', { required: 'Поле обязательно к заполнению' })}
        />
        <div className="form__error">
          {errors?.email && <p>{errors?.email?.message || 'Error email'}</p>}
        </div>
      </label>
      <label className="form__label">
        <span className="form__span">password *</span>
        <input
          type="password"
          className="form__input"
          {...register('password', {
            required: 'Поле обязательно к заполнению'
          })}
        />
        <div className="form__error">
          {errors?.password && (
            <p>{errors?.password?.message || 'Error password'}</p>
          )}
        </div>
      </label>

      <input
        className="form__btn"
        type="submit"
        disabled={!isValid}
        value={btnText}
      />
    </form>
  )
}
