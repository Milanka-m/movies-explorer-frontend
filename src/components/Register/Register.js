import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import '../../styles/auth.css';
import iconLogo from '../../images/header-logo.svg';

function Register({ handleRegister, serverError }) {

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
    if (serverError === 409) setMessageServerError('Такой пользователь уже существует'); 
  }, [serverError]);

  function handleInputChange(e) {
    handleChange(e);
  }
  
  function handleSubmit(e){
    e.preventDefault();
    const { name, email, password } = values;
    handleRegister({ name, email, password });
  }

  return (
    <div className="auth">
      <form 
        ref={valid}
        name="register"
        action="#"
        className="auth__form" 
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="auth__form-container">
          <img className="auth__logo-form" src={iconLogo} alt="изображение логотипа" />
          <h2 className="auth__form-title">Добро пожаловать!</h2> 
          <fieldset className="auth__form-input-container">
            <section className="auth__form-section">
              <label class="auth__form-label" htmlFor="name">Имя</label> 
              <input className={`auth__form-input ${
                errors.name ? 'auth__form-input-type-error' : ''}`}
                type="text" 
                value={values.name} 
                onChange={handleInputChange} 
                name="name" 
                id="name"
                autoComplete="off"  
                minLength="2"
                maxLength="30" 
                required 
              /> 
              <span className="auth__form-input-error" id="name-error">
                {errors.name || ''}
              </span>
            </section> 
            <section className="auth__form-section">
              <label class="auth__form-label" htmlFor="email">E-mail</label>
              <input className={`auth__form-input ${
                errors.email ? 'auth__form-input-type-error' : ''}`} 
                type="email" 
                value={values.email} 
                onChange={handleChange} 
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
              <label class="auth__form-label" htmlFor="password">Пароль</label>
              <input className={`auth__form-input ${
                errors.password ? 'auth__form-input-type-error' : ''}`} 
                type="password" 
                value={values.password} 
                onChange={handleChange} 
                name="password" 
                id="password"
                minLength="8"
                autoComplete="off"
                required 
              />
              <span className="auth__form-input-error" id="password-error">
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
            Зарегистрироваться
          </button>
        </fieldset>
        <fieldset className="auth__signin">
          <p className="auth__title-signin">Уже зарегистрированы?</p>
          <NavLink to="/signin" className="auth__link-signin">Войти</NavLink>
        </fieldset>
      </form>
    </div>
  )
};

export default Register;