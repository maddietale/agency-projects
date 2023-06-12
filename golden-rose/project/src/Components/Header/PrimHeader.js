import React, { useState } from "react";
// STYLE
import Style from "./Header.module.css";
import { FlexWrapper, FlexLink } from "../StyledComponent";
// IMG
import Logo from "../../Images/Header/Logo.svg";
import Arrow from "../../Images/Header/Arrow.svg";
import Search from "../../Images/Header/Search.svg";
import Devider from "../../Images/Header/Devider.svg";
import User from "../../Images/Header/User.svg";
import Basket from "../../Images/Header/Basket.svg";
import ArrowHover from "../../Images/Header/ArrowHover.svg";
import SearchHover from "../../Images/Header/SearchHover.svg";
import UserHover from "../../Images/Header/UserHover.svg";
import BasketHover from "../../Images/Header/BasketHover.svg";

const PrimHeader = () => {

    // STATES
    const [isSearch, setIsSearch] = useState(false);
    const [isBasket, setIsBasket] = useState(false);
    const [isArrow, setIsArrow] = useState(false);
    const [isUser, setIsUser] = useState(false);

    return (
        <FlexWrapper justifyContent={"space-around"} className={Style.primContainer}>
            <div>
                <img src={Logo} alt="Gold Rose Logo" />
            </div>

            <FlexWrapper gapSize={"32px"}>
                <FlexLink onMouseEnter={() => setIsArrow(true)} onMouseLeave={() => setIsArrow(false)} url={"/"} gapSize={"8px"}>
                    دسته‌بندی‌ها
                    <img src={isArrow ? (ArrowHover) : (Arrow)} alt="Arrow" />
                </FlexLink>
                <a href="/">وبلاگ</a>
                <a href="/">گالری</a>
                <a href="/">درباره رز طلایی</a>
                <a href="/">ارتباط با ما</a>
            </FlexWrapper>

            <FlexWrapper gapSize={"16px"}>
                <img src={isSearch ? (SearchHover) : (Search)} onMouseEnter={() => setIsSearch(true)} onMouseLeave={() => setIsSearch(false)} alt="Search" />
                <img src={Devider} alt="Devider" />
                <FlexLink onMouseEnter={() => setIsUser(true)} onMouseLeave={() => setIsUser(false)} url={"/"} gapSize={"8px"}>
                    حساب کاربری
                    <img src={isUser ? (UserHover) : (User)} alt="User" />
                </FlexLink>
                <img src={isBasket ? (BasketHover) : (Basket)} onMouseEnter={() => setIsBasket(true)} onMouseLeave={() => setIsBasket(false)} alt="Basket" />
            </FlexWrapper>
        </FlexWrapper>
    );
};

export default PrimHeader;