// IMG
import Slide1 from "../images/slider/img.svg";
import Glass from "../images/slider/Glass.svg";
import Right from "../images/slider/RightBTN.svg";
import Left from "../images/slider/LeftBTN.svg";
// STYLE
import styled from "styled-components";
// GRID
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1120px;
  height: 455px;
  justify-content: center;
  align-items: flex-end;
`;
// SLIDER
const Container = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Slide = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 5%;
  padding-inline: 3%;
  z-index: 2;
`;
const Button = styled.div`
  width: 198px;
  height: 48px;
  color: var(--main-black);
  background-color: var(--purple-one);
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  font-family: "On-Semi";
  font-size: 18px;
`;
const Dir = styled.img`
  cursor: pointer;
  margin-left: ${(props) => props.direction === "right" && "20px"};
  &:hover {
    opacity: 0.5;
  }
`;

const Slider = () => {
  return (
    <Wrapper>
      <Container>
        <Image>
          <Slide src={Slide1} alt="slide" />
        </Image>
        <Info>
          <Button>
            <img src={Glass} alt="glass" />
            عینک‌های کومولایف
          </Button>
          <div>
            <Dir direction="right" src={Right} />
            <Dir direction="left" src={Left} />
          </div>
        </Info>
      </Container>
    </Wrapper>
  );
};

export default Slider;
