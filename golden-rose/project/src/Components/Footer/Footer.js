import React from 'react';
// STYLE
import Style from "./Footer.module.css";
import { CustomLink, FlexWrapper } from '../StyledComponent';

const Footer = () => {
    return (
        <div className={Style.container}>
            <div className={Style.footerWrapper}>
                <div className={Style.clm1}>1</div>
                <div className={Style.clm2}>2</div>
                <div className={Style.clm3}>3</div>
                <div className={Style.clm4}>4</div>
            </div>
            <div className={Style.copyright}>این یک طرح کانسپت از “علی محمدزاده” است و هیچ گونه استفاده تجاری ندارد. (کلیه حقوق این سایت محفوظ است.)</div>
        </div>
    );
};

export default Footer;