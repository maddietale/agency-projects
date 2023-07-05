import React from 'react';
// STYLE
import Style from "./Footer.module.css";
import { CustomLink, FlexWrapper } from '../StyledComponent';
// IMG
import Enamad from "../../Images/Footer/Enamad.svg";
import Zarinpal from "../../Images/Footer/Zarinpal.svg";
import RoseLogo from "../../Images/Footer/Logo.svg";
import locationIcon from "../../Images/Footer/locationIcon.svg";
import callIcon from "../../Images/Footer/callIcon.svg";
import mailIcon from "../../Images/Footer/mailIcon.svg";

const Footer = () => {
    return (
        <div className={Style.container}>
            <div className={Style.footerWrapper}>
                <div className={Style.clm1}>
                    <CustomLink image><img className={Style.roseLogo} src={RoseLogo} alt='Rose Logo' /></CustomLink>
                    <h4 className={Style.title1}>رز طلایی، حامی حقوق زنان است.</h4>
                    <FlexWrapper className={Style.item1} gapSize={"8px"}><img src={locationIcon} alt="logo" /><h6>دفتر مرکزی: شیراز، شیراز، خانه رز ها</h6></FlexWrapper>
                    <FlexWrapper className={Style.item1} gapSize={"8px"}><img src={callIcon} alt="logo" /><h6>09307819889 - 071 12340000</h6></FlexWrapper>
                    <FlexWrapper className={Style.item1} gapSize={"8px"}><img src={mailIcon} alt="logo" /><h6>GoldenRoz @ Gmail.com</h6></FlexWrapper>
                </div>
                <div className={Style.clm2}>
                    <h4 className={Style.title2}>لینک های کاربردی</h4>
                    <CustomLink className={Style.item2} display={"block"}>دسته‌بندی باکس‌ها</CustomLink>
                    <CustomLink className={Style.item2} display={"block"}>وبلاگ</CustomLink>
                    <CustomLink className={Style.item2} display={"block"}>گالری تصاویر</CustomLink>
                    <CustomLink className={Style.item2} display={"block"}>درباره رز طلایی</CustomLink>
                    <CustomLink className={Style.item2} display={"block"}>ارتباط با ما</CustomLink>
                    <CustomLink className={Style.item2} display={"block"}>راهنمای خرید</CustomLink>
                </div>
                <div className={Style.clm3}>
                    <h4 className={Style.title3}>دسته بندی محصولات</h4>
                    <CustomLink className={Style.item3} display={"block"}>باکس گل‌های سفارشی</CustomLink>
                    <CustomLink className={Style.item3} display={"block"}>باکس گل‌های رز جاوید</CustomLink>
                    <CustomLink className={Style.item3} display={"block"}>باکس گل‌های رز جادویی</CustomLink>
                    <CustomLink className={Style.item3} display={"block"}>باکس گل‌های رز معلق</CustomLink>
                    <CustomLink className={Style.item3} display={"block"}>باکس گل‌های ولنتاین</CustomLink>
                    <CustomLink className={Style.item3} display={"block"}>گلدان‌های رز جاوید</CustomLink>
                </div>
                <div className={Style.clm4}>
                    <h4 className={Style.title4}>نمادهای رز طلایی</h4>
                    <FlexWrapper className={Style.item4} gapSize={"24px"}>
                        <CustomLink image><img src={Enamad} alt='logo' /></CustomLink>
                        <CustomLink image><img src={Zarinpal} alt='logo' /></CustomLink>
                    </FlexWrapper>
                </div>
            </div>
            <div className={Style.copyright}>این یک طرح کانسپت از “علی محمدزاده” است و هیچ گونه استفاده تجاری ندارد. (کلیه حقوق این سایت محفوظ است.)</div>
        </div>
    );
};

export default Footer;