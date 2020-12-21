import { Accordion, ContactForm } from "../components";
import faqsData from "../fixtures/faqs.json";

export function FaqContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
      
      <ContactForm>
          <ContactForm.Text>
            Ready to watch? Enter your email to create or restart your membership.
          </ContactForm.Text>
          <ContactForm.Input placeholder="Email address" />
          <ContactForm.Button>
            Try it now
          </ContactForm.Button>
          <ContactForm.Break />
      </ContactForm>
    </Accordion>
  );
}
