import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Контакты</h2>
      <span className="section__subtitle">Свяжитесь с нами! </span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Напишите нам</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">E-mail</h3>
              <span className="contact__card-data">user@gmail.com</span>

              <a
                href="mailto:user@gmail.com?subject=Запрос информации&body=Здравствуйте! У меня есть вопрос..."
                className="contact__button"
              >
                Напишите нам
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-phone-call contact__card-icon"></i>

              <h3 className="contact__card-title">Телефон</h3>
              <span className="contact__card-data">+7 (xxx) xxx-xx-xx</span>

              <a href="tel:+7(xxx)xxx-xx-xx" className="contact__button">
                Позвоните
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-vk contact__card-icon"></i>

              <h3 className="contact__card-title">Вконтакте</h3>
              <span className="contact__card-data"></span>

              <a
                href="https://vk.com/interdommebel"
                className="contact__button"
              >
                Перейти в VK
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Отправьте нам свою заявку</h3>

          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Имя</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Введите свое имя"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">E-mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="электронный адрес"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Заявка</label>
              <textarea
                name="project"
                cols={30}
                rows={10}
                className="contact__form-input"
                placeholder="Сообщение"
              ></textarea>
            </div>

            <button type="submit" className="button button--flex">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
