import Widget from "./Widget";
// IMG
import P5 from "../images/products/5.svg";
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
  grid-template-columns: 1120px;
  height: 568px;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 1px solid #000000;
`;
// BOX
const Container = styled.div`
  width: 100%;
  height: 408px;
  display: flex;
  overflow-x: scroll;
  align-items: center;
`;
const Info = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Right = styled.div`
  width: 361px;
  height: 56px;
  display: flex;
  gap: 16px;
  align-items: center;
`;
const Left = styled.div`
  width: 156px;
  height: 32px;
  display: flex;
  gap: 16px;
  align-items: center;
`;
const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
`;
const Text = styled.span`
  font-size: 1rem;
`;
const Arrow = styled.img`
  cursor: pointer;
`;

const PopularProducts = () => {
  return (
    <Wrapper>
      <Info>
        <Right>
          <img src={Heart} />
          <Title>محبوب‌ترین محصولات کومولایف</Title>
        </Right>
        <Left>
          <Text>مشاهده همه محصولات</Text>
          <Arrow src={Icon} />
        </Left>
      </Info>
      <Container>
        <Widget url={P5} title={"عینک اول"} isBlog={false} price={"2900"} />
        <Widget url={P2} title={"عینک دوم"} isBlog={false} price={"2900"} />
        <Widget url={P3} title={"عینک سوم"} isBlog={false} price={"2900"} />
        <Widget url={P4} title={"عینک چهارم"} isBlog={false} price={"2900"} />
      </Container>
    </Wrapper>
  );
};

export default PopularProducts;
