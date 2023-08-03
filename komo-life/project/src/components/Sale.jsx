// IMAGE
import Lines from "../images/sale/Lines.svg";
import Per from "../images/sale/Per.svg";
// STYLE
import styled from "styled-components";
// GRID
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1120px;
  height: 304px;
  justify-content: center;
  align-items: flex-end;
`;
// BOX
const Container = styled.div`
  width: 100%;
  height: 224px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000000;
  background-image: url(${Lines});
  position: relative;
`;
const Image = styled.img`
position: absolute;
top: 1;
`;
const Box = styled.div`
  width: 350px;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Text = styled.span`
  font-size: 48px;
  margin: 0.5rem 0 0.5rem 0;
  direction: ${(props) => props.en && "ltr"};
`;

const Sale = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <Image src={Per} />
          <Text en>S A L E</Text>
          <Text>۸ تا ۱۵ شـــــهـــریـــور</Text>
          <Text en>20 % - 50 % S A L E</Text>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Sale;
