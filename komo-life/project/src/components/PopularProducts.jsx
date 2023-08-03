import Widget from "./Widget";
// IMG
import P1 from "../images/products/1.svg";
import P2 from "../images/products/2.svg";
import P3 from "../images/products/3.svg";
import P4 from "../images/products/4.svg";
import Heart from "../images/info/HeartIcon.svg";
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

const PopularProducts = () => {
  return (
    <Wrapper>
      <Info>
        <Right>
          <img src={Heart} alt="heart" />
          <Title>محبوب‌ترین محصولات کومولایف</Title>
        </Right>
        <Left>
          <Text>مشاهده همه محصولات</Text>
          <Arrow src={Icon} alt="arrow" />
        </Left>
      </Info>
      <Container>
        <Widget
          url={P1}
          title={"عینک آفتابی Avery Carbon"}
          isBlog={false}
          price={"۲.۹۰۰.۰۰۰"}
        />
        <Widget
          url={P4}
          title={"ساعت Rey Legacy Leather Cognac"}
          isBlog={false}
          price={"۲.۹۰۰.۰۰۰"}
        />
        <Widget
          url={P3}
          title={"کوله پشتی Masao Lotus"}
          isBlog={false}
          price={"۲.۹۰۰.۰۰۰"}
        />
        <Widget
          url={P2}
          title={"ساعت Rey Legacy Leather Cognac"}
          isBlog={false}
          price={"۲.۹۰۰.۰۰۰"}
        />
      </Container>
    </Wrapper>
  );
};

export default PopularProducts;
