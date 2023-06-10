import React from "react";
// STYLE
import Style from "./Header.module.css";
// IMG
import Logo from "../../Images/Header/Logo.svg";
import Arrow from "../../Images/Header/Arrow.svg";
import Search from "../../Images/Header/Search.svg";
import Devider from "../../Images/Header/Devider.svg";
import User from "../../Images/Header/User.svg";
import Basket from "../../Images/Header/Basket.svg";

const PrimHeader = () => {
    return (
        <div className={Style.primContainer}>
            <div className={Style.rightBox}>
                <img className={Style.logo} src={Logo} alt="Gold Rose Logo" />
            </div>

            <ul className={Style.navigation}>
                <li className={Style.navigation__item}>دسته‌بندی‌ها <img src={Arrow} alt="Arrow"/> </li>
                <li className={Style.navigation__item}>وبلاگ</li>
                <li className={Style.navigation__item}>گالری</li>
                <li className={Style.navigation__item}>درباره رز طلایی</li>
                <li className={Style.navigation__item}>ارتباط با ما</li>
            </ul>

            <div className={Style.leftBox}>
                <img className={Style.search} src={Search} alt="Search"/>
                <img src={Devider} alt="Devider"/>
                <div className={Style.account}>
                    <span>حساب کاربری</span>
                    <img src={User} alt="User"/>
                </div>
                <img className={Style.basket} src={Basket} alt="Basket"/>
            </div>
        </div>
    );
};

export default PrimHeader;