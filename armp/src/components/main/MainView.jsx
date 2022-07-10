import React from "react";
import article from "../../assets/images/article.png";
import portfolio from "../../assets/images/portfolio.png";
import video from "../../assets/images/video.png";
import "./MainView.css";

const MainView = () => {
  return (
    <div className="backImage">
      <div className="title">
        Мы знаем о строительстве все, каждый новый проект — это отдельная
        история
      </div>
      <div className="mainCover">
        Здесь мы делимся с вами историями, уникальным пытом, реальными кейсами и
        видео-обзорами. Это дает нам стимул развиваться и держать руку на
        пульсе, а вам позволяет наблюдать за нашими рабочими процессами и
        учиться вместе с нами.
      </div>
      <div className="flexIcons">
        <div className="article">
          <img src={article} />
          <div>Кейсы</div>
        </div>
        <div className="portfolio">
          <img src={portfolio} />
          <div>Видеоблог</div>
        </div>
        <div className="video">
          <img src={video} />
          <div>Полезные статьи</div>
        </div>
      </div>
      <div>
        <input type="text" placeholder="Ваше имя" />
        <input type="number" placeholder="Номер телефона" />
        <input type="submit" placeholder="Получить консультацию" />
        <div>
          Ищите профессионалов? Оставьте заявку и мы проконсультируем вас
          абсолютно бесплатно!
        </div>
      </div>
    </div>
  );
};
export default MainView;
