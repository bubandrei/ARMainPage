import React from "react";
import "./VideoBlog.css";
import img1 from '../../assets/images/1.png';
import img2 from '../../assets/images/2.png';
import img3 from '../../assets/images/3.png';

const VideoBlog = () => {
  return (
    <div className="mainBlog">
      <div className="titleBlog">Видеоблог</div>
      <div className="textBlog">
        Снимаем для вас интересные ролики, в которых делимся полезной
        информацией
      </div>
      <div className="fotoBlog">
        <div>
          <img src={img1} className="styleFoto"/>
        </div>
        <div>
          <img src={img2} className="styleFoto"/>
        </div>
        <div>
          <img src={img3} className="styleFoto"/>
        </div>
      </div>
      <div>
        <button>Больше полезных видео</button>
      </div>
    </div>
  );
};
export default VideoBlog;
