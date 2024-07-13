import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about-icon"></i>
        <h3 className="about__title">Опыт</h3>
        <span className="about__subtitle">
          Занимаемся разработкой, изготовлением и продажей корпусной мебели
          более тридцати лет.
        </span>
      </div>

      <div className="about__box">
        <i class="bx bxs-trophy about-icon"></i>
        <h3 className="about__title">Специализация</h3>
        <span className="about__subtitle">
          Мы производим корпусную мебель, мебельные фасады, столешницы из
          искусственного камня, изделия из стекла и зеркала. Так же, возможен
          раскрой ДСП и ДВП.
        </span>
      </div>

      <div className="about__box">
        <i class="bx bx-check-shield about-icon"></i>
        <h3 className="about__title">Гарантия</h3>
        <span className="about__subtitle">
          На всю нашу продукцию распространяется гарантия сроком 12 месяца, а
          так же гарантийное и послегарантийное обслуживание.
        </span>
      </div>
    </div>
  );
};

export default Info;
