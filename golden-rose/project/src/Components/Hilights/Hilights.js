import React from 'react';
// STYLE
import Style from "./Hilights.module.css";
import { FlexWrapper, GoldenText } from '../StyledComponent';
// IMG
import Design from "../../Images/Hilights/Design.svg";
import Secure from "../../Images/Hilights/Secure.svg";
import Transport from "../../Images/Hilights/Transport.svg";
import Support from "../../Images/Hilights/Support.svg";

const Hilights = () => {
    return (
        <div className={Style.container}>
            <FlexWrapper gapSize={"40px"} justifyContent={"center"} className={Style.hilightsContainer}>
                {/* FIRST */}
                <div className={Style.hilight}>
                    <div className={Style.hilightImage}>
                        <img src={Design} alt='hilight' />
                    </div>
                    <div className={Style.hilightText}>
                        <h4>طراحی منحصر به فرد</h4>
                        <span>محصولات  دارای طراحی منحصر به فرد هستند و می‌توانند هدیه ای ارزنده و خاص باشند.</span>
                    </div>
                </div>
                {/* SECOND */}
                <div className={Style.hilight}>
                    <div className={Style.hilightImage}>
                        <img src={Secure} alt='hilight' />
                    </div>
                    <div className={Style.hilightText}>
                        <h4>گارانتی تمامی محصولات</h4>
                        <span>تمامی محصولات <GoldenText /> دارای گارانتی 5 ساله هستند و در صورت بروز خرابی، می‌توانید محصول خود را به رایگان تعویض کنید.</span>
                    </div>
                </div>
                {/* THIRD */}
                <div className={Style.hilight}>
                    <div className={Style.hilightImage}>
                        <img src={Transport} alt='hilight' />
                    </div>
                    <div className={Style.hilightText}>
                        <h4>ارسال رایگان به سراسر کشور</h4>
                        <span>خرید شما از <GoldenText /> به صورت رایگان ارسال می‌شود و پس از ارسال کالا، کد پیگیری برای شما پیامک می‌شود.</span>
                    </div>
                </div>
                {/* FOURTH */}
                <div className={Style.hilight}>
                    <div className={Style.hilightImage}>
                        <img src={Support} alt='hilight' />
                    </div>
                    <div className={Style.hilightText}>
                        <h4>مشاوره رایگان تلفنی و آنلاین</h4>
                        <span><GoldenText /> به شما کمک می‌کند تا هدیه ای مناسب برای شخص مورد نظر تهیه کنید. همچنین <GoldenText /> به شما کمک می‌کند تا با توجه به سبک معماری خانه و یا محل کار خود، بهترین انتخاب را داشته باشید.</span>
                    </div>
                </div>
            </FlexWrapper>
        </div>
    );
};

export default Hilights;