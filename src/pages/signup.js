import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { SignupContainer } from '../containers/signup'

export default function Signup() {
    return (
        <>
            <HeaderContainer>
                <SignupContainer />
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}