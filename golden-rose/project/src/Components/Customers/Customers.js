import React from 'react';
// STYLE
import Style from "./Customers.module.css";
import { CustomLink, FlexWrapper } from '../StyledComponent';
// IMG
import Rose from "../../Images/BGRose.svg";
import Bazar from "../../Images/Customers/Bazar.svg";
import Digikala from "../../Images/Customers/Digikala.svg";
import Divar from "../../Images/Customers/Divar.svg";
import HamrahAval from "../../Images/Customers/HamrahAval.svg";
import Snapp from "../../Images/Customers/Snapp.svg";
import Yektanet from "../../Images/Customers/Yektanet.svg";
import Arrow from "../../Images/Customers/Arrow.svg";

const Customers = () => {
    return (
        <div className={Style.container}>
            <h1>مشتریان سازمانی رز طلایی چه کسانی هستند؟</h1>
            <FlexWrapper justifyContent={"center"} gapSize={"48px"} className={Style.customersLogo}>
                <CustomLink image url={"https://www.digikala.com/"}>
                    <img src={Digikala} alt='logo' />
                </CustomLink>
                <CustomLink image url={"https://snapp.ir/"}>
                    <img src={Snapp} alt='logo' />
                </CustomLink>
                <CustomLink image url={"https://mci.ir/"}>
                    <img src={HamrahAval} alt='logo' />
                </CustomLink>
                <CustomLink image url={"https://cafebazaar.ir/"}>
                    <img src={Bazar} alt='logo' />
                </CustomLink>
                <CustomLink image url={"https://www.yektanet.com/"}>
                    <img src={Yektanet} alt='logo' />
                </CustomLink>
                <CustomLink image url={"https://divar.ir/"}>
                    <img src={Divar} alt='logo' />
                </CustomLink>
            </FlexWrapper>
            <CustomLink className={Style.addWrapper}>
                <button className={Style.addCustomer}>
                    به جمع مشتریان سازمانی ما بپیوندید
                    <img src={Arrow} alt='arrow' />
                </button>
            </CustomLink>
            <img src={Rose} alt="Rose" className={Style.bgRose} />
        </div>
    );
};

export default Customers;