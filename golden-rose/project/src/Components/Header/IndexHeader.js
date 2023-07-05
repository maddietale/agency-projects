import React from "react";
// COMPONENTS
import PrimHeader from "./PrimHeader";
// STYLE
import Style from "./Header.module.css";
import { FlexWrapper, GoldenText } from "../StyledComponent";
// IMG
import Shadow from "../../Images/Header/Shadow.svg";
import Flower from "../../Images/Header/Flower.svg";

const IndexHeader = () => {
    return (
        <div className={Style.container}>
            <PrimHeader /> {/* Height: 88px */}
            <FlexWrapper justifyContent={"center"} className={Style.indexTitle}> {/* Height: 912px */}
                <img className={Style.shadow} src={Shadow} alt="Shadow Box" />
                <pre className={Style.title}>{`
مجموعه تخصصی
طراحی،تولید و فروش
باکس گل ‌های رز جاودان`}</pre>
                <img className={Style.flower} src={Flower} alt="Rose" />
                <span className={Style.text}>
                    <GoldenText /> مجموعه تخصصی طراحی، تولید و فروش باکس گل های رز جاودان در ایران می‌باشد. باکس گل های متنوع در ابعاد، اندازه ها و رنگ های مختلف که با استاندارد های معماری داخلی طراحی شده اند و به همراه گل های رز جاودان در رنگ های مختلف به فروش میرسند.</span>
            </FlexWrapper>
            <div className={Style.blurFooter}></div> {/* Height: 80px */}
        </div>
    );
};

export default IndexHeader;