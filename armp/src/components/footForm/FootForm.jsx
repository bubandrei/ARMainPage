import React from "react";
import home from "../../assets/images/home1.png";
import "./FootForm.css";

const FootForm = () =>
{
    return (
        <div className="wrapFootForm">
            <div className="homeImg">
                <img src={ home } />
            </div>
            <div className="wrapForm">
                <form action="" className="styleForm">
                    <div className="titleFootForm">Хотите с нами сотрудничать?</div>
                    <div className="textFootForm">Заполните форму и мы перезвоним вам в течение 30 минут!</div>
                    <input type="text" placeholder="Ваше имя"/>
                    <input type="text" placeholder="Номер телефона"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Ваше сообщение (необязательно)"></textarea>
                    <input type="submit" name="" id="" className="btnFootForm"/>
                </form>
            </div>

        </div>
    )
}
export default FootForm