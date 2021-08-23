import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="project">
      <h2 className="project__title">О проекте</h2>
      <ul className="project__cards">
        <li className="project__item">
          <h4 className="project__subtitle">Дипломный проект включал 5 этапов</h4>
          <p className="project__text">Составление плана, работу над бэкендом, вёрстку, 
          добавление функциональности и финальные доработки.</p>
        </li>
        <li className="project__item">
          <h4 className="project__subtitle">На выполнение диплома ушло 5 недель</h4>
          <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, 
          которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="project__stage">
        <li className="project__stage-item">
          <h4 className="project__stage-title project__stage-title_color_green">1 неделя</h4>
          <p className="project__stage-subtitle">Back-end</p>
        </li>
        <li className="project__stage-item">
          <h4 className="project__stage-title project__stage-title_color_gray">4 недели</h4>
          <p className="project__stage-subtitle">Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;