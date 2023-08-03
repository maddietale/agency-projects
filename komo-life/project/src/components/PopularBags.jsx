import Widget from "./Widget";
// IMG
import P5 from "../images/products/5.svg";
import Bags from "../images/info/BagsIcon.svg";
import Icon from "../images/info/Arrow.svg";
// STYLE
import styled from "styled-components";
// GRID
const Wrapper = styled.div`
  display: grid;
  grid-row-end: 56px 408px;
  grid-template-columns: 1120px;
  height: 544px;
  margin: 56px 0 0 0;
  justify-content: center;
  align-items: flex-end;
`;
// Title
const Info = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  overflow: scroll;
`;
const Left = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  overflow: scroll;
`;
const Text = styled.span`
  font-size: 1rem;
  overflow: scroll;
`;
const Arrow = styled.img`
  cursor: pointer;
`;
// BOX
const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: scroll;
  align-items: center;
`;

const PopularBags = () => {
  return (
    <Wrapper>
      <Info>
        <Right>
          <img src={Bags} alt="bag"/>
          <Title>محبوب‌ترین کوله‌پشتی‌های کومولایف</Title>
        </Right>
        <Left>
          <Text>مشاهده کوله‌پشتی‌های بیشتر</Text>
          <Arrow src={Icon} alt="arrow"/>
        </Left>
      </Info>
      <Container>
        <Widget url={P5} title={"کوله پشتی Masao Lotus"} isBlog={false} price={"۲.۹۰۰.۰۰۰"} />
        <Widget url={P5} title={"کوله پشتی Masao Lotus"} isBlog={false} price={"۲.۹۰۰.۰۰۰"} />
        <Widget url={P5} title={"کوله پشتی Masao Lotus"} isBlog={false} price={"۲.۹۰۰.۰۰۰"} />
        <Widget
          url={P5}
          title={"کوله پشتی Masao Lotus"}
          isBlog={false}
          price={"۲.۹۰۰.۰۰۰"}
        />
      </Container>
    </Wrapper>
  );
};

export default PopularBags;
