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
            <div className="styleForm">
                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
            </div>

        </div>
    )
}
export default FootForm