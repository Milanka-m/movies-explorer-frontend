import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Login.css';
import '../../styles/auth.css';
import iconLogo from '../../images/header-logo.svg';

function Login({ handleLogin, serverError }) {
  
  const valid = React.createRef();
  const [messageServerError, setMessageServerError] = React.useState('');

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setIsValid,
  } = useFormWithValidation();

  React.useEffect(() => {
    setIsValid(valid.current.checkValidity());
  }, [setIsValid, valid]);

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);
  
  React.useEffect(() => {
    if (serverError === 400) setMessageServerError('Введены некорректные данные');
    if (serverError === 401) setMessageServerError('Неверный логин или пароль');
  }, [serverError]);
  
  function handleInputChange(e) {
    handleChange(e);
  }
  
  function handleSubmit(e){
    e.preventDefault();
    const { email, password } = values;
    handleLogin({ email, password });
  }

  return (
    <div className="auth">
      <form 
        ref={valid}
        name="login"
        className="auth__form" 
        action="#"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="auth__form-container">
          <img className="auth__logo-form" src={iconLogo} alt="изображение логотипа" />
          <h2 className="auth__form-title">Рады видеть!</h2> 
          <fieldset className="login__form-input-container">
            <section className="auth__form-section">
              <label className="auth__form-label" htmlFor="email">E-mail</label>
              <input className={`auth__form-input ${
                errors.email ? 'auth__form-input-type-error' : ''}`}
                type="email" 
                value={values.email} 
                onChange={handleInputChange} 
                name="email" 
                id="email"
                autoComplete="off"
                required 
              />
              <span className="auth__form-input-error" id="email-error">
                {errors.email || ''}
              </span>
            </section>
            <section className="auth__form-section">
              <label className="auth__form-label" htmlFor="password">Пароль</label>
              <input className={`auth__form-input ${
                errors.password ? 'auth__form-input-type-error' : ''}`}
                type="password" 
                value={values.password} 
                onChange={handleInputChange} 
                name="password" 
                id="password" 
                minLength="8"
                autoComplete="off"
                required 
              />
              <span className="auth__form-input-error">
                {errors.password || ''}
              </span>
            </section>
          </fieldset>
        </div>
        <fieldset className="auth__form-handlers">
          {serverError ? (
            <span className="auth__form-message-error">{messageServerError}</span>
          ) : (
            <></>
          )}
          <button 
            type="submit" 
            className={`auth__form-button ${
              isValid ? '' : 'auth__form-button_disabled'}`}
            disabled={!isValid}
          >
            Войти
          </button>
        </fieldset>
        <fieldset className="auth__signin">
          <p className="auth__title-signin">Ещё не зарегистрированы?</p>
          <NavLink to="/signup" className="auth__link-signin">Регистрация</NavLink>
        </fieldset>
      </form>
    </div>
  )
};

export default Login;