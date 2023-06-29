import React from 'react';
// COMPONENTS
// STYLE
import Style from "./Order.module.css";
import { FlexWrapper } from "../StyledComponent";
// IMG
import Rose from "../../Images/BGRose.svg";
import OrderImg from "../../Images/Order/Order.svg";

const Order = () => {
    return (
        <div className={Style.container}>
            <img src={Rose} alt="Rose" className={Style.bgRoseTop} />
            <FlexWrapper className={Style.orderBox}>
                <FlexWrapper justifyContent={"center"} className={Style.orderImg}>
                    <img src={OrderImg} />
                </FlexWrapper>
                <div className={Style.orderSteps}>
                    <h1>آیا به یک محصول سفارشی نیاز دارید؟</h1>
                    <div className={Style.steps}>
                        <div className={Style.item1}>1</div>
                        <div className={Style.item2}>2</div>
                        <div className={Style.item3}>3</div>
                        <div className={Style.item4}>4</div>
                        <div className={Style.item5}>5</div>
                        <div className={Style.item6}>6</div>
                        <div className={Style.item7}>7</div>
                        <div className={Style.item8}>8</div>
                        <div className={Style.item9}>9</div>
                        <div className={Style.item10}>10</div>
                        <div className={Style.item11}>11</div>
                        <div className={Style.item12}>12</div>
                    </div>
                </div>
            </FlexWrapper>
            <img src={Rose} alt="Rose" className={Style.bgRoseBottom} />
        </div>
    );
};

export default Order;