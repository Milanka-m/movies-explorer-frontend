import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/auth.css';
import iconLogo from '../../images/header-logo.svg';

function Register() {

  return (
    <div className="auth">
      <form className="auth__form">
        <div className="auth__form-container">
          <img className="auth__logo-form" src={iconLogo} alt="изображение логотипа" />
          <h2 className="auth__form-title">Добро пожаловать!</h2> 
          <fieldset className="auth__form-input-container">
            <section className="auth__form-section">
              <label class="auth__form-label" for="name">Имя</label> 
              <input className="auth__form-input" value="Милана" type="text" name="name" id="name"  
                minLength="2" maxLength="40" required /> 
            </section> 
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
          <button type="submit" className="auth__form-button">Зарегистрироваться</button>
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