import styled from "styled-components";

export const FlexWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: ${props => props.gapSize || "0px"};
justify-content: ${props => props.justifyContent || ""};
`;

export const FlexLink = styled.a.attrs(props => ({
  href: props.url || "/",
  onClick: e => e.preventDefault(),
}))`
display: flex;
color: var(--white);
flex-direction: row;
align-items: center;
font-size: 0.875rem;
text-decoration: none;
gap: ${props => props.gapSize || "0px"};
justify-content: ${props => props.justifyContent || ""};
&:hover {
  color: var(--gold-100);
}
`;

export const CustomLink = styled.a.attrs(props => ({
  href: props.url || "/",
  onClick: e => e.preventDefault(),
}))`
font-size: 0.875rem;
color: var(--white);
text-decoration: none;
&:hover {
color: var(--gold-100);
}
> * {
&:first-child{
  display: ${props => props.image && "block"};
}}
`;