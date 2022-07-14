import React from "react";
import "./Case.css";
import foto from "../../assets/images/image3.png";
import portfolio1 from "../../assets/images/portfolio1.png";
import cabin1 from "../../assets/images/cabin1.png";
import doghouse from "../../assets/images/doghouse.png";
import woodenhouse from "../../assets/images/woodenhouse.png";
import image7 from "../../assets/images/7.png";
import tree1 from "../../assets/images/14.png";

const Case = () =>
{
  return (
    <div className="wrapCase">
      <div className="titleCase">Кейсы
      </div>
      <div className="styleImg7"><img src={image7} /></div>
      <div className="styleImgTree1"><img src={tree1} /></div>
      <div className="textCase">
        Показываем процесс работы изнутри, делимся результатами, опытом,
        полезными фишками
      </div>
      <div className="wrapInCase">
        <div className="caseOption">
          <div className="borderInput backGreen">
            <img className="textStyle" src={cabin1} />
            <span className="textStyle">Дома из оцилиндрованного бруса</span>
          </div>
          <div className="borderInput">
            <img className="textStyle" src={woodenhouse} />
            <span className="textStyle">Дома из клееного бруса</span>
          </div>
          <div className="borderInput">
            <img className="textStyle" src={doghouse} />
            <span className="textStyle">Кирпичные/каменные дома</span>
          </div>
          <div className="borderInput">
            <img className="textStyle" src={portfolio1} />
            <span className="textStyle">Кейсы по услугам</span>
          </div>
        </div>
        <div className="wrapFoto">
          <img src={foto} className="caseFoto" />
        </div>
        <div className="caseText">
          <div className="titleBlock">Дом в Балашихе</div>
          <div><span className="bold">Площадь:</span> <span className="square">  128м.кв.</span> </div>
          <div>
            <span className="bold">Кол-во комнат:</span><span className="simpleText">  2</span>
            <span className="bold">Кол-во этажей:</span><span className="simpleText">  2</span>
          </div>
          <div><span className="bold">Стиль:</span> <span className="simpleText">европейский</span></div>
          <div><span className="bold">Стоимость:</span><span className="square">  2100000 ₽</span>  </div>
          <div className="link">
            <a href="" className="bold">Подробнее о проекте</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Case;
