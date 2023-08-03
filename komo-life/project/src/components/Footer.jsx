// IMG
import ImgLogo from "../images/ImgLogo.svg";
import Pay from "../images/footer/Pay.svg";
import Location from "../images/footer/Location.svg";
import Email from "../images/footer/Email.svg";
import Call from "../images/footer/Call.svg";
import Arrow from "../images/footer/Arrow.svg";
import Heart from "../images/footer/Heart.svg";
// STYLE
import styled from "styled-components";
// BOX
const Wrapper = styled.div`
  width: 100%;
  height: 650px;
  margin: 10rem 0 0 0;
  background-color: var(--main-black);
`;
const Container = styled.div`
  width: 100%;
  height: 600px;
`;
const Image = styled.img`
  cursor: pointer;
`;
// HEADER
const Brand = styled.div`
  width: 100%;
  height: 250px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Logo = styled.a.attrs((props) => ({
  href: props.url || "/",
  onClick: (e) => e.preventDefault(),
}))`
  display: block;
  cursor: pointer;
  width: 80px;
  height: 80px;
  margin: 0 0 1rem 0;
`;
const Slogan = styled.span`
  width: 632px;
  display: block;
  font-size: 24px;
  color: var(--main-white);
`;
const Links = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// RIGHT SIDE
const Right = styled.div`
  flex: 2;
  height: 100%;
  color: var(--main-white);
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 5% 0 0;
`;
const Button = styled.button`
  width: 272px;
  height: 35px;
  background-color: var(--main-white);
  border: solid 1px var(--main-black);
  cursor: pointer;
  font-size: 18px;
  margin: 0 0 24px 0;
  &:hover {
    background-color: var(--black-four);
  }
`;
const Info = styled.span`
  max-width: 380px;
  display: block;
  font-size: 18px;
  margin: 16px 0 0 0;
  display: flex;
  align-items: baseline;
  gap: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
// CNETER
const Center = styled.div`
  flex: 1;
  height: 100%;
  color: var(--main-white);
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.span`
  font-size: 24px;
  margin: 0 0 1.5rem 0;
`;
const Link = styled.a.attrs((props) => ({
  href: props.url || "/",
  onClick: (e) => e.preventDefault(),
}))`
  font-size: 18px;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  cursor: pointer;
  color: var(--main-white);
  &:hover {
    opacity: 0.5;
  }
`;
// LEFT SIDE
const Left = styled.div`
  flex: 1;
  height: 100%;
  color: var(--main-white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
// COPYRIGHT BOX
const Copyright = styled.div`
  width: 100%;
  height: 50px;
  font-size: 16px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-white);
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Brand>
          <Logo>
            <Image src={ImgLogo} alt="Logo" />
          </Logo>
          <Slogan>
            معنایی که در تمام این سال‌ها عملا به مجموعه کومولایف انسجام بخشیده
            است:
          </Slogan>
          <Slogan>
            “فضایی مینیمال، جوان، شهری و آوانگارد که دیزاین به عنوان عنصر مرکزی
            در آن حضوری پررنگ دارد..”
          </Slogan>
        </Brand>
        <Links>
          <Right>
            <Button>من رو به نزدیک‌ترین نمایندگی کومولایف ببر!</Button>
            <Info>
              <Image src={Location} alt="Location" />
              آدرس دفتر مرکزی: تهران، میدان آرژانتین، خیابان زاگرس، پلاک۶، واحد۲
              (لطفا برای هماهنگی، از طریق راه‌های ارتباطی ما را مطلع کنید. دفتر
              مرکزی برای ملاقات های کاری است و برای خرید، به نمایندگی‌ها مراجعه
              کنید.)
            </Info>
            <Info>
              <Image src={Email} alt="Email" />
              info@komolife.ir
            </Info>
            <Info>
              <Image src={Call} alt="Call" />
              ۰۲۱ - ۸۸۸۸۳۰۷۷
            </Info>
          </Right>
          <Center>
            <Title>لینک‌های کاربردی</Title>
            <Link>
              مشاهده اطلاعات نمایندگی‌ها <Image src={Arrow} alt="arrow" />
            </Link>
            <Link>
              درخواست ثبت نمایندگی کومولایف <Image src={Heart} alt="heart" />
            </Link>
            <Link>
              خدمات گارانتی کومولایف <Image src={Arrow} alt="arrow" />
            </Link>
            <Link>
              تماس با کومولایف <Image src={Arrow} alt="arrow" />
            </Link>
            <Link>
              درباره کومولایف <Image src={Arrow} alt="arrow" />
            </Link>
            <Link>
              وبلاگ کومولایف <Image src={Arrow} alt="arrow" />
            </Link>
          </Center>
          <Left>
            <Image src={Pay} />
          </Left>
        </Links>
      </Container>
      <Copyright>کلیه حقوق این سایت متعلق به کومولایف است.</Copyright>
    </Wrapper>
  );
};

export default Footer;
