import React from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
import '../../styles/auth.css';

function Profile({ onUpdateUser, handleLogout, serverError }) {
  const currentUser = React.useContext(CurrentUserContext);

  const valid = React.createRef();
  const [messageServerError, setMessageServerError] = React.useState('');
  const [name, setName] = React.useState();
  const [email, seEmail] = React.useState();
 
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
  }, [serverError]);

  React.useEffect(() => {
    if(Object.keys(currentUser).length) {
      setName(currentUser.name);
      seEmail(currentUser.email);
    }
  }, [currentUser, valid]);

  function handleInputChange(e) {
    handleChange(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email } = values;
    onUpdateUser({
      name: name,
      email: email,
    });
  }

  return (
    <div className="profile">
      <form 
        ref={valid}
        name="profile"
        className="profile__form" 
        action="#"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="profile__form-container">
          <h2 className="profile__form-title">{`Привет, ${values.name ? values.name : name}!`}</h2> 
          <fieldset className="profile__form-input-container">
            <section className="profile__form-section">
              <label className="profile__form-label" htmlFor="name">Имя</label> 
              <input 
                className={`profile__form-input ${
                  errors.name ? 'auth__form-input-type-error' : ''}`} 
                value={values.name ? values.name : name} 
                onChange={handleInputChange} 
                type="text" 
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
            <section className="profile__form-section">
              <label className="profile__form-label" htmlFor="email">E-mail</label>
              <input 
                className={`profile__form-input ${
                  errors.email ? 'auth__form-input-type-error' : ''}`} 
                value={values.email ? values.email : email} 
                onChange={handleInputChange} 
                type="email" 
                name="email" 
                id="email"
                autoComplete="off" 
                required 
              />
              <span className="auth__form-input-error" id="email-error">
                {errors.email || ''}
              </span>
            </section>
          </fieldset>
        </div>
        <fieldset className="profile__form-handlers">
          {serverError ? (
            <span className="profile__form-message-error">{messageServerError}</span>
          ) : (
            <></>
          )}
          <button 
            type="submit" 
            className={`profile__form-button ${
              isValid ? '' : 'profile__form-button_disabled'}`}
            disabled={!isValid}
          >
            Редактировать
          </button>
        </fieldset>
        <fieldset className="profile__form-handlers">
          <button 
            onClick={handleLogout} 
            className="profile__form-button profile__form-button_color_red">
              Выйти из аккаунта
          </button>
        </fieldset>
      </form>
    </div>
  )
};

export default Profile;