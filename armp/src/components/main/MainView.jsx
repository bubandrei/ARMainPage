import React from "react";
import article from "../../assets/images/article.png";
import portfolio from "../../assets/images/portfolio.png";
import video from "../../assets/images/video.png";
import "./MainView.css";

const MainView = () => {
  return (
    <div className="wrapMain">
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
        <div className="fixSize">
          <img src={article} />
          <div className="styleText">Кейсы</div>
        </div>
        <div className="fixSize">
          <img src={portfolio} />
          <div className="styleText">Видеоблог</div>
        </div>
        <div className="fixSize">
          <img src={video} />
          <div className="styleText">Полезные статьи</div>
        </div>
      </div>
      <div>
        <div className="styleInput">
          <input className="inputFill" type="text" placeholder="Ваше имя" />
          <input className="inputFill" type="number" placeholder="Номер телефона" />
          <input className="inputFill btnSend" type="submit" value="Получить консультацию"/>
        </div>
        <div className="bottomText">
          Ищите профессионалов? Оставьте заявку и мы проконсультируем вас
          абсолютно бесплатно!
        </div>
      </div>
    </div>
  );
};
export default MainView;
