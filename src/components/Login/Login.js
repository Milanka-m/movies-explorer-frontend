import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';
import '../../styles/auth.css';
import iconLogo from '../../images/header-logo.svg';

function Login() {

  return (
    <div className="auth">
      <form className="auth__form">
        <div className="auth__form-container">
          <img className="auth__logo-form" src={iconLogo} alt="изображение логотипа" />
          <h2 className="auth__form-title">Рады видеть!</h2> 
          <fieldset className="login__form-input-container">
            <section className="auth__form-section">
              <label class="auth__form-label" for="email">E-mail</label>
              <input className="auth__form-input" type="email" value="lianabir@mail.ru" name="email" id="email" required />
              <span className="auth__form-input-error" id="email-error">Что-то пошло не так...</span>
            </section>
            <section className="auth__form-section">
              <label class="auth__form-label" for="password">Пароль</label>
              <input className="auth__form-input" type="password" value="123456789" name="password" id="password" required />
              <span className="auth__form-input-error" id="password-error">Что-то пошло не так...</span>
            </section>
          </fieldset>
        </div>
        <fieldset className="auth__form-handlers">
          <button type="submit" className="auth__form-button">Войти</button>
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