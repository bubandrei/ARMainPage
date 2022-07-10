import React from "react";
import "./Case.css";
import foto from "../../assets/images/image3.png";
import portfolio1 from "../../assets/images/portfolio1.png";
import cabin1 from "../../assets/images/cabin1.png";
import doghouse from "../../assets/images/doghouse.png";
import woodenhouse from "../../assets/images/woodenhouse.png";

const Case = () => {
  return (
    <div>
      <div className="titleCase">Кейсы</div>
      <div className="textCase">
        Показываем процесс работы изнутри, делимся результатами, опытом,
        полезными фишками
      </div>
      <div>
        <div>
          <div>
            <img src={cabin1} />
          </div>
          <div>
            <img src={woodenhouse} />
          </div>
          <div>
            <img src={doghouse} />
          </div>
          <div>
            <img src={portfolio1} />
          </div>
        </div>
        <div>
          <img src={foto} />
        </div>
        <div>
          <div>Дом в Балашихе</div>
          <div>Площадь 128м.кв.</div>
          <div>
            <span>Кол-во комнат: 2</span>
            <span>Кол-во этажей: 2</span>
          </div>
          <div>Стиль: европейский</div>
          <div>Стоимость: 2100000 ₽</div>
          <div><a href="">Подробнее о проекте</a></div>
        </div>
      </div>
    </div>
  );
};
export default Case;
