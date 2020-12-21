import {
  Container,
  Inner,
  Title,
  SubTitle,
  ButtonLink,
  Error,
  ErrorTitle,
  ErrorCode,
} from "./styles/error";

export default function Err({ children, ...restProps }) {
  return (
  <Container {...restProps}>{children}</Container>
  );
}

Err.Inner = function ErrInner({ children, ...restProps }){
return <Inner {...restProps}>{children}</Inner>
}
Err.Title = function ErrTitle({ children, ...restProps }){
return <Title {...restProps}>{children}</Title>
}
Err.SubTitle = function ErrSubTitle({ children, ...restProps }){
return <SubTitle {...restProps}>{children}</SubTitle>
}
Err.ButtonLink = function ErrButtonLink({ children, ...restProps }){
return <ButtonLink {...restProps}>{children}</ButtonLink>
}
Err.Error = function ErrError({ children, ...restProps }){
return <Error {...restProps}>{children}</Error>
}
Err.ErrorCode = function ErrErrorCode({ children, ...restProps }){
return <ErrorCode {...restProps}>{children}</ErrorCode>
}
Err.ErrorTitle = function ErrErrorTitle({ children, ...restProps }){
return <ErrorTitle {...restProps}>{children}</ErrorTitle>
}

