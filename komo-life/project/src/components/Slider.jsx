// IMG
import image from "../images/slider/img.svg";
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
const Container__img = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Image = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Container__info = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 5%;
  padding-inline: 3%;
  z-index: 2;
`;
const Info__btn = styled.div`
  width: 198px;
  height: 48px;
  color: var(--main-black);
  background-color: var(--purple-one);
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
const Info__dir = styled.img`
  cursor: pointer;
  margin-left: ${(props) => props.direction === "right" && "20px"};
`;

const Slider = () => {
  return (
    <Wrapper>
      <Container>
        <Container__img>
          <Image src={image} />
        </Container__img>
        <Container__info>
          <Info__btn>
            <img src={Glass} />
            عینک‌های کومولایف
          </Info__btn>
          <div>
            <Info__dir direction="right" src={Right} />
            <Info__dir direction="left" src={Left} />
          </div>
        </Container__info>
      </Container>
    </Wrapper>
  );
};

export default Slider;
