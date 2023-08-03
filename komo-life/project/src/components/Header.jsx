import { useState } from "react";
// IMG
import TextLogo from "../images/TextLogo.svg";
import Arrow from "../images/header/Arrow.svg";
import HoverArrow from "../images/header/HoverArrow.svg";
import SearchIcon from "../images/header/Search.svg";
import HoverSearch from "../images/header/HoverSearch.svg";
import UserIcon from "../images/header/User.svg";
import HoverUser from "../images/header/HoverUser.svg";
import BasketIcon from "../images/header/Basket.svg";
// STYLE
import styled from "styled-components";
// GRID
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1120px;
  height: 88px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #000000;
`;
// BOX
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
const Items = styled.a.attrs((props) => ({
  href: props.url || "/",
  onClick: (e) => e.preventDefault(),
}))`
  font-family: "On-Semi";
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
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
const Search = styled.div`
  width: 182px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--main-black);
  background-color: var(--black-five);
  font-family: "On-Semi" !important;
  cursor: pointer;
  &:hover {
    color: var(--main-black);
  }
`;
const Basket = styled.div`
  width: 125px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: var(--main-white);
  border: 1px solid var(--main-black);
  background-color: var(--main-black);
  font-family: "On-Semi" !important;
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
          <Items
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            محصولات کومولایف{" "}
            <Image src={hover ? HoverArrow : Arrow} alt="Down" />
          </Items>
          <Items
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            شعب کومولایف <Image src={hover ? HoverArrow : Arrow} alt="Down" />
          </Items>
          <Items>درباره ما</Items>
          <Items>تماس با ما</Items>
        </Navbar>
        <Logo>
          <Image src={TextLogo} alt="KomoLife" />
        </Logo>
        <Box>
          <Search
            onMouseEnter={() => setSearchHover(true)}
            onMouseLeave={() => setSearchHover(false)}
          >
            <Image src={searchHover ? HoverSearch : SearchIcon} alt="Search" />
            دنبال چه محصولی هستی؟
          </Search>
          <Image
            onMouseEnter={() => setUserHover(true)}
            onMouseLeave={() => setUserHover(false)}
            src={userHover ? HoverUser : UserIcon}
            alt="User"
          />
          <Basket>
            سبد خرید
            <Image src={BasketIcon} alt="Basket" />
          </Basket>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Header;
