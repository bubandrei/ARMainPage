import React from "react";
import logo from '../../assets/images/image_1.png';
import box from '../../assets/images/Group_1087.png';
import phone from '../../assets/images/Group_1071.png';
import telegramm from '../../assets/images/Group_1279.png';
import viber from '../../assets/images/Group_1280.png';
import simplePhone from '../../assets/images/Group_1278.png';


const TopInfo = () => {

  return (
    <div>
      <img src={logo} />
      <div>Пн-Сб: c 10:00 до 20:00 Выходной: воскресенье</div>
      <div>
        <img src={box}/>
        Заказать 3D-макет дома
      </div>
      <div>
        <img src={phone}/>
        <div>+7 (915) 168-55-50</div>
        <div>
            <img src={simplePhone}/><img src={telegramm}/><img src={viber}/>
        </div>
      </div>
    </div>
  );
};
export default TopInfo;
