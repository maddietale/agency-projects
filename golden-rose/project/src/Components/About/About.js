import React from 'react';
// STYLE
import Style from "./About.module.css";
import { FlexWrapper } from "../StyledComponent";
// IMG
import AboutImg from "../../Images/About/About.svg";

const About = () => {
    return (
       <FlexWrapper justifyContent={"center"} className={Style.container}>
        <div className={Style.aboutImg}>
            <img src={AboutImg} alt='index'/>
        </div>
        <div className={Style.aboutDescription}>
            <h1>درباره رز طلایی</h1>
            <span>رز طلایی فعالیت خود را از سال 98 در “خانه رزها” واقع در شیراز شروع کرد و سعی در تولید رز هایی با اصلاح ژنتیکی داشته است. فعالیت اصلاح ژنتیکی مطابق با جدید ترین فناوری روز انجام می‌شود و موجب می‌شود رز ها دوام بیشتری داشته باشند. رز طلایی تا کنون جوایز متعددی دریافت کرده است و توانسته است جایگاه خوبی را در میان سازمان های خصوصی برای هدیه دادن پیدا کند. لازم به ذکر است که رز های رز طلایی هر سال باید مورد بازبینی قرار بگیرند و این کار به صورت رایگان انجام می شود. از این که از سال 98 تا کنون توانسته ایم موجب شادی و حس خوب در میان خانه های شما شویم خوشنودیم.</span>
        </div>
       </FlexWrapper>
    );
};

export default About;