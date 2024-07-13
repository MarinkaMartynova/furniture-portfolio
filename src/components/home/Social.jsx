import React from "react"; // rafce

const Social = () => {
  return (
    <div className="home__social">
      {/* вставить ссылку на свой профиль */}
      <a
        href="https://www.youtube.com/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="bx bxl-youtube"></i>
      </a>
      <a
        href="https://www.vk.com/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="bx bxl-vk"></i>
      </a>
      <a
        href="https://ok.ru/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bx bxl-ok-ru"></i>
      </a>
    </div>
  );
};

export default Social;
