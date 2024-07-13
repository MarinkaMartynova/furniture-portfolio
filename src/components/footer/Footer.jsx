import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h3 className="footer__title">мебельное ателье ИнтерДом</h3>

        <ul className="footer__list">
          <li className="footer__item">
            <a href="#home" className="footer__link">
              Главная
            </a>
          </li>
          <li className="footer__item">
            <a href="#about" className="footer__link">
              О нас
            </a>
          </li>
          <li className="footer__item">
            <a href="#portfolio" className="footer__link">
              Портфолио
            </a>
          </li>
          <li className="footer__item">
            <a href="#contacts" className="footer__link">
              Контакты
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://ok.ru/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-ok-ru"></i>
          </a>
          <a
            href="https://vk.com/interdommebel"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-vk"></i>
          </a>
          <a
            href="https://t.me/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-telegram"></i>
          </a>
        </div>

        <div className="footer__content grid">
          <span className="footer__copy">
            &copy; 2024 Interdom. Все права защищены.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
