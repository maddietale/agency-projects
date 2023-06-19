import React from 'react';
// COMPONENTS
import HilightComponent from './HilightComponent';
// STYLE
import Style from "./Hilights.module.css";
import { FlexWrapper } from '../StyledComponent';
// IMG
import Design from "../../Images/Hilights/Design.svg";
import Secure from "../../Images/Hilights/Secure.svg";
import Transport from "../../Images/Hilights/Transport.svg";
import Support from "../../Images/Hilights/Support.svg";

const Hilights = () => {
    return (
        <div className={Style.container}>
            <FlexWrapper gapSize={"40px"} justifyContent={"center"} className={Style.hilightsContainer}>
                <HilightComponent url={Design} hilightTitle="طراحی منحصر به فرد" hilightDescription="محصولات رز طلایی دارای طراحی منحصر به فرد هستند و می‌توانند هدیه ای ارزنده و خاص باشند." />
                <HilightComponent url={Secure} hilightTitle="گارانتی تمامی محصولات" hilightDescription="تمامی محصولات رز طلایی دارای گارانتی 5 ساله هستند و در صورت بروز خرابی، می‌توانید محصول خود را به رایگان تعویض کنید." />
                <HilightComponent url={Transport} hilightTitle="ارسال رایگان به سراسر کشور" hilightDescription="خرید شما از رز طلایی به صورت رایگان ارسال می‌شود و پس از ارسال کالا، کد پیگیری برای شما پیامک می‌شود." />
                <HilightComponent url={Support} hilightTitle="مشاوره رایگان تلفنی و آنلاین" hilightDescription="رز طلایی به شما کمک می‌کند تا هدیه ای مناسب برای شخص مورد نظر تهیه کنید. همچنین رز طلایی به شما کمک می‌کند تا با توجه به سبک معماری خانه و یا محل کار خود، بهترین انتخاب را داشته باشید." />
            </FlexWrapper>
        </div>
    );
};

export default Hilights;