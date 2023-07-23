import { useState } from "react";
// Image
import TextLogo from "../images/TextLogo.svg";
import Arrow from "../images/header/Arrow.svg";
import HoverArrow from "../images/header/HoverArrow.svg";
import Search from "../images/header/Search.svg";
import HoverSearch from "../images/header/HoverSearch.svg";
import User from "../images/header/User.svg";
import HoverUser from "../images/header/HoverUser.svg";
import Basket from "../images/header/Basket.svg";
// STYLE
import styled from "styled-components";
// BOX
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1120px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #000000;
`;
const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--black-one);
  font-size: 1rem;
`;
const Image = styled.img`
  cursor: pointer;
`;
// RIGHT SIDE
const Navbar = styled.div`
  width: 405px;
  display: flex;
  align-items: center;
  gap: 24px;
`;
const Navbar__items = styled.a.attrs((props) => ({
  href: props.url || "/",
  onClick: (e) => e.preventDefault(),
}))`
  text-decoration: none;
  color: var(--black-one);
  cursor: pointer;
  &:hover {
    color: var(--main-black);
  }
`;
// CENTER
const Logo = styled.a.attrs((props) => ({
  href: props.url || "/",
  onClick: (e) => e.preventDefault(),
}))`
  display: block;
  cursor: pointer;
`;
// LEFT SIDE
const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const Box__search = styled.div`
  width: 182px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--main-black);
  background-color: var(--black-five);
  cursor: pointer;
  &:hover {
    color: var(--main-black);
  }
`;
const Box__Basket = styled.div`
  width: 125px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: var(--main-white);
  border: 1px solid var(--main-black);
  background-color: var(--main-black);
  cursor: pointer;
  &:hover {
    background-color: var(--black-one);
  }
`;

const Header = () => {
  // STATE
  const [hover, setHover] = useState(false);
  const [searchHover, setSearchHover] = useState(false);
  const [userHover, setUserHover] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Navbar>
          <Navbar__items
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            محصولات کومولایف{" "}
            <Image src={hover ? HoverArrow : Arrow} alt="Down" />
          </Navbar__items>
          <Navbar__items
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            شعب کومولایف <Image src={hover ? HoverArrow : Arrow} alt="Down" />
          </Navbar__items>
          <Navbar__items>درباره ما</Navbar__items>
          <Navbar__items>تماس با ما</Navbar__items>
        </Navbar>
        <Logo>
          <Image src={TextLogo} alt="KomoLife" />
        </Logo>
        <Box>
          <Box__search
            onMouseEnter={() => setSearchHover(true)}
            onMouseLeave={() => setSearchHover(false)}
          >
            <Image src={searchHover ? HoverSearch : Search} alt="Search" />
            دنبال چه محصولی هستی؟
          </Box__search>
          <Image
            onMouseEnter={() => setUserHover(true)}
            onMouseLeave={() => setUserHover(false)}
            src={userHover ? HoverUser : User}
            alt="User"
          />
          <Box__Basket>
            سبد خرید
            <Image src={Basket} alt="Basket" />
          </Box__Basket>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Header;
