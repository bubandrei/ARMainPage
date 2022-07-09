import React from "react";
import logo from "../../assets/images/image_1.png";
import box from "../../assets/images/Group_1087.png";
import phone from "../../assets/images/Group_1071.png";
import telegramm from "../../assets/images/Group_1279.png";
import viber from "../../assets/images/Group_1280.png";
import simplePhone from "../../assets/images/Group_1278.png";
import "./TopInfo.css";

const TopInfo = () => {
  return (
    <div className="wrap">
      <img src={logo} className="logo" />
      <div className="workHour">
        <div>Пн-Сб: c 10:00 до 20:00</div>
        <div>Выходной: воскресенье</div>
      </div>
      <div className="maket">
        <img src={box} />
        Заказать 3D-макет дома
      </div>
      <div className="phoneWrapper">
        <img src={phone} className='item1'/>
        <div className="phone item2">+7 (915) 168-55-50</div>
        <div className='item3'>
          <img src={simplePhone} />
          <img src={telegramm} />
          <img src={viber} />
        </div>
      </div>
      <button>Заказать звонок</button>
    </div>
  );
};
export default TopInfo;
