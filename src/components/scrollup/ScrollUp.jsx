import React, { useEffect } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      if (window.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Очистка слушателя при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scrollup">
      <a href="#home">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </div>
  );
};

export default ScrollUp;
