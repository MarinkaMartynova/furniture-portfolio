import React from "react";
import "./about.css";
import AboutImg from "../../assets/interdom.png";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">О компании</h2>
      <span className="section__subtitle">Добро пожаловать!</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Наша мебель — это уникальный дизайн, созданный по Вашим пожеланиям
            совместно с нашими дизайнерами.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
