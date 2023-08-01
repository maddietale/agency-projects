import Widget from "./Widget";
// IMG
import P6 from "../images/products/6.svg";
import P1 from "../images/products/1.svg";
import P3 from "../images/products/3.svg";
import P7 from "../images/products/7.svg";
import Glasses from "../images/info/GlassesIcon.svg";
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
`;
// BOX
const Container = styled.div`
  width: 100%;
  height: 408px;
  display: flex;
  overflow: scroll;
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
  width: 358px;
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
  overflow: scroll;
`;
const Text = styled.span`
  font-size: 1rem;
  overflow: scroll;
`;
const Arrow = styled.img`
  cursor: pointer;
`;

const PopularGlasses = () => {
  return (
    <Wrapper>
      <Info>
        <Right>
          <img src={Glasses} />
          <Title>محبوب‌ترین عینک‌های کومولایف</Title>
        </Right>
        <Left>
          <Text>مشاهده عینک‌های بیشتر</Text>
          <Arrow src={Icon} />
        </Left>
      </Info>
      <Container>
        <Widget
          url={P6}
          title={"عینک اول"}
          isBlog={false}
          price={"۲.۹۰۰.۰۰۰"}
        />
        <Widget
          url={P1}
          title={"عینک دوم"}
          isBlog={false}
          price={"۲.۹۰۰.۰۰۰"}
        />
        <Widget
          url={P3}
          title={"عینک سوم"}
          isBlog={false}
          price={"۲.۹۰۰.۰۰۰"}
        />
        <Widget
          url={P7}
          title={"عینک چهارم"}
          isBlog={false}
          price={"۲.۹۰۰.۰۰۰"}
        />
      </Container>
    </Wrapper>
  );
};

export default PopularGlasses;
