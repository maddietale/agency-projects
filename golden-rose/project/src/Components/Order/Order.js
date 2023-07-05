import React from 'react';
// COMPONENTS
// STYLE
import Style from "./Order.module.css";
import { FlexWrapper, CustomLink } from "../StyledComponent";
// IMG
import Rose from "../../Images/BGRose.svg";
import OrderImg from "../../Images/Order/Order.svg";
import whiteArrow from "../../Images/Order/whiteArrow.svg";
import blackArrow from "../../Images/Order/blackArrow.svg";
import sOne from "../../Images/Order/sOne.svg";
import sTwo from "../../Images/Order/sTwo.svg";
import sThree from "../../Images/Order/sThree.svg";
import sFour from "../../Images/Order/sFour.svg";
import sFive from "../../Images/Order/sFive.svg";

const Order = () => {
    return (
        <div className={Style.container}>
            <img src={Rose} alt="Rose" className={Style.bgRoseTop} />
            <FlexWrapper className={Style.orderBox}>
                <FlexWrapper justifyContent={"center"} className={Style.orderImg}><img src={OrderImg} alt='garden' /></FlexWrapper>
                <div className={Style.orderSteps}>
                    <h1>آیا به یک محصول سفارشی نیاز دارید؟</h1>
                    <div className={Style.steps}>
                        <div className={Style.item1}>
                            <img className={Style.stepIcon} src={sOne} alt='sign up' />
                            <span>در سایت ثبت نام کنید و یا وارد شوید.</span>
                        </div>
                        <div className={Style.item2}><img src={whiteArrow} alt='next' /></div>
                        <div className={Style.item3}>
                            <img className={Style.stepIcon} src={sTwo} alt='search' />
                            <span>محصول خود را جستجو کنید.</span>
                        </div>
                        <div className={Style.item4}><img src={whiteArrow} alt='next' /></div>
                        <div className={Style.item5}>
                            <img className={Style.stepIcon} src={sThree} alt='fill up' />
                            <span>فرم مورد نظر را پر کنید.</span>
                        </div>
                        <div className={Style.item6}><img src={whiteArrow} alt='next' /></div>
                        <div className={Style.item7}>
                            <img className={Style.stepIcon} src={sFour} alt='choose' />
                            <span>نوع بسته بندی خود را انتخاب کنید.</span>
                        </div>
                        <div className={Style.item8}><img src={whiteArrow} alt='next' /></div>
                        <div className={Style.item9}>
                            <img className={Style.stepIcon} src={sFive} alt='shop' />
                            <span>خرید خود را نهایی کنید.</span>
                        </div>
                        <CustomLink className={Style.startWrapper}>
                            <button className={Style.start}>
                                شروع فرآیند
                                <img src={blackArrow} alt='arrow' />
                            </button>
                        </CustomLink></div>
                </div>
            </FlexWrapper>
            <img src={Rose} alt="Rose" className={Style.bgRoseBottom} />
        </div>
    );
};

export default Order;