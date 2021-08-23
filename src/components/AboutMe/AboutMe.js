import React from 'react';
import author from '../../images/author.png';
import './AboutMe.css';
import '../AboutProject/AboutProject.css';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
        <h2 className="project__title">Студент</h2>
        <div className="about-me__content">
          <article className="about-me__description">
            <h1 className="about-me__title">Милана</h1>
            <p className="about-me__subtitle">Веб-разработчик, 34 года</p>
            <p className="about-me__paragraph">Я родилась в Минске, закончила факультет экономики и управления торговлей БГЭУ.
              Работала в сфере общепита. 2 года назад переехала с семьей в Санкт-Петербург. У меня есть муж и 2 дочки. 
              Я люблю рисовать, а ещё увлекаюсь фитнесом. Недавно начала кодить.
              По окончании курса по веб-разработке, хочу стать активным участником сильной команды.</p>
            <ul className="about-me__links">
              <li>
                <a className="about-me__link" 
                  href="https://www.facebook.com/profile.php?id=100000351628871" 
                  target="_blank" 
                  rel="noopener noreferrer">Facebook</a>
                </li>
              <li>
                <a className="about-me__link" 
                  href="https://github.com/Milanka-m" 
                  target="_blank" 
                  rel="noopener noreferrer">Github</a>
              </li>
            </ul>
          </article>
          <img className="about-me__illustration" src={author} alt="изображение автора" />
        </div>
      </section>
  );
}

export default AboutMe;