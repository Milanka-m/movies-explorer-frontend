import React from 'react';
import './InfoTooltip.css';

function InfoTooltip ({ error, isOpen, onClose }) {
  const popupOpened = `${isOpen && 'popup_opened'}`;
  
  return (
    <div className={`popup ${popupOpened}`}>
      <div className="popup__container">
        <button className="popup__close link" type="button" aria-label="Закрыть попап" onClick={onClose}></button>
        <p className={`popup__info-text ${error ? 'popup__info-text_error' : ''}`}>
          {error ? "Что-то пошло не так!" : "Данные успешно обновлены!"}
        </p>
      </div>
    </div>
    
  );
}

export default InfoTooltip;