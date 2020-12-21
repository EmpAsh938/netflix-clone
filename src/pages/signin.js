import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { SigninContainer } from '../containers/signin'

export default function Signin() {
    return (
        <>
            <HeaderContainer>
                <SigninContainer />
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}