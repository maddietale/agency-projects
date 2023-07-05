import React from 'react';
// STYLE
import Style from "./Footer.module.css";
import { CustomLink, FlexWrapper } from '../StyledComponent';

const Footer = () => {
    return (
        <div className={Style.container}>
            <div className={Style.footerWrapper}>
                <div className={Style.clm1}>1</div>
                <div className={Style.clm2}>
                    <h4>لینک های کاربردی</h4>
                    <CustomLink display={"block"}>دسته‌بندی باکس‌ها</CustomLink>
                    <CustomLink display={"block"}>وبلاگ</CustomLink>
                    <CustomLink display={"block"}>گالری تصاویر</CustomLink>
                    <CustomLink display={"block"}>درباره رز طلایی</CustomLink>
                    <CustomLink display={"block"}>ارتباط با ما</CustomLink>
                    <CustomLink display={"block"}>راهنمای خرید</CustomLink>
                </div>
                <div className={Style.clm3}>
                    <h4>دسته بندی محصولات</h4>
                    <CustomLink display={"block"}>باکس گل‌های سفارشی</CustomLink>
                    <CustomLink display={"block"}>باکس گل‌های رز جاوید</CustomLink>
                    <CustomLink display={"block"}>باکس گل‌های رز جادویی</CustomLink>
                    <CustomLink display={"block"}>باکس گل‌های رز معلق</CustomLink>
                    <CustomLink display={"block"}>باکس گل‌های ولنتاین</CustomLink>
                    <CustomLink display={"block"}>گلدان‌های رز جاوید</CustomLink>
                </div>
                <div className={Style.clm4}>4</div>
            </div>
            <div className={Style.copyright}>این یک طرح کانسپت از “علی محمدزاده” است و هیچ گونه استفاده تجاری ندارد. (کلیه حقوق این سایت محفوظ است.)</div>
        </div>
    );
};

export default Footer;