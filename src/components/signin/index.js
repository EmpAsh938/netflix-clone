import {
    Container,
    Error,
    Base,
    Title,
    Text,
    TextSmall,
    Link,
    Input,
    Submit
} from './styles/signin'

export default function Signin({ children, ...restProps }){
    return (
    <Container {...restProps} >{children}</Container>
    )
}

Signin.Error = function SigninError({ children, ...restProps }){
return <Error {...restProps}>{children}</Error>
}
Signin.Base = function SigninBase({ children, ...restProps }){
return <Base {...restProps}>{children}</Base>
}
Signin.Title = function SigninTitle({ children, ...restProps }){
return <Title {...restProps}>{children}</Title>
}
Signin.Text = function SigninText({ children, ...restProps }){
return <Text {...restProps}>{children}</Text>
}
Signin.TextSmall = function SigninTextSmall({ children, ...restProps }){
return <TextSmall {...restProps}>{children}</TextSmall>
}
Signin.Link = function SigninLink({ children, ...restProps }){
return <Link {...restProps}>{children}</Link>
}
Signin.Input = function SigninInput({ ...restProps }){
return <Input {...restProps} />
}
Signin.Submit = function SigninSubmit({ children, ...restProps }){
return <Submit {...restProps}>{children}</Submit>
}