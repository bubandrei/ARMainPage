import React from "react";
import "./Case.css";
import foto from "../../assets/images/image3.png";
import portfolio1 from "../../assets/images/portfolio1.png";
import cabin1 from "../../assets/images/cabin1.png";
import doghouse from "../../assets/images/doghouse.png";
import woodenhouse from "../../assets/images/woodenhouse.png";

const Case = () => {
  return (
    <div className="wrapCase">
      <div className="titleCase">Кейсы</div>
      <div className="textCase">
        Показываем процесс работы изнутри, делимся результатами, опытом,
        полезными фишками
      </div>
      <div className="wrapInCase">
        <div className="caseOption">
          <div className="borderInput backGreen">
            <img src={cabin1} />
            <span className="textStyle">Дома из оцилиндрованного бруса</span>
          </div>
          <div className="borderInput">
            <img src={woodenhouse} />
            <span  className="textStyle">Дома из клееного бруса</span>
          </div>
          <div className="borderInput">
            <img src={doghouse} />
            <span  className="textStyle">Кирпичные/каменные дома</span>
          </div>
          <div className="borderInput">
            <img src={portfolio1} />
            <span  className="textStyle">Кейсы по услугам</span>
          </div>
        </div>
        <div className="wrapFoto">
          <img src={foto} className="caseFoto" />
        </div>
        <div className="caseText">
          <div>Дом в Балашихе</div>
          <div>Площадь 128м.кв.</div>
          <div>
            <span>Кол-во комнат: 2</span>
            <span>Кол-во этажей: 2</span>
          </div>
          <div>Стиль: европейский</div>
          <div>Стоимость: 2100000 ₽</div>
          <div>
            <a href="">Подробнее о проекте</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Case;
