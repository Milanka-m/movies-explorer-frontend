import React from 'react';
import './Profile.css';
import '../../styles/auth.css';

function Profile() {
  return (
    <div className="profile">
      <form className="profile__form">
        <div className="profile__form-container">
          <h2 className="profile__form-title">Привет, Милана!</h2> 
          <fieldset className="profile__form-input-container">
            <section className="profile__form-section">
              <label class="profile__form-label" for="name">Имя</label> 
              <input className="profile__form-input" value="Милана" type="text" name="name" id="name"  
                minLength="2" maxLength="40" required /> 
            </section> 
            <section className="profile__form-section">
              <label class="profile__form-label" for="email">E-mail</label>
              <input className="profile__form-input" value="lianabir@mail.ru" type="email" name="email" id="email" required />
              <span className="auth__form-input-error" id="email-error">Что-то пошло не так...</span>
            </section>
          </fieldset>
        </div>
        <fieldset className="profile__form-handlers">
          <button type="submit" className="profile__form-button">Редактировать</button>
        </fieldset>
        <fieldset className="profile__form-handlers">
          <button className="profile__form-button profile__form-button_color_red">Выйти из аккаунта</button>
        </fieldset>
      </form>
    </div>
  )
};

export default Profile;