import {
    Container,
    Input,
    Break,
    Button,
    Text
} from './styles/contactform'


export default function ContactForm({ children, ...restProps }) {
    return (
    <Container {...restProps}>{children}</Container>
    )
}

ContactForm.Input = function ContactFormInput({...restProps }){
    return <Input {...restProps} />
} 

ContactForm.Button = function ContactFormButton({children, ...restProps}) {
    return (
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    )
}

ContactForm.Text = function ContactFormText({children, ...restProps}) {
    return (
        <Text {...restProps}>
            {children}
        </Text>
    )
}

ContactForm.Break = function ContactFormBreak({...restProps}) {
    return <Break {...restProps}/>
}