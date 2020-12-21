import { JumbotronContainer } from "../containers/jumbotron";
import { FaqContainer } from "../containers/faq";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Header, ContactForm } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Header.Feature>
          <Header.Title>Unlimited movies, TV shows, and more.</Header.Title>
          <Header.SubTitle>Watch anywhere. Cancel anytime.</Header.SubTitle>
          <ContactForm>
            <ContactForm.Break />
            <ContactForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </ContactForm.Text>
            <ContactForm.Input placeholder="Email address" />
            <ContactForm.Button>Try IT NOW</ContactForm.Button>
          </ContactForm>
        </Header.Feature>
      </HeaderContainer>
      
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
