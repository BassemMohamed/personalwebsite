import React from "react";
import styled from "styled-components";
import { Text, TextField, TextArea, Button } from "../../UI/";
import css from "./ContactPage.style";

class ContactPage extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <section className={className}>
        <form name="contact" method="POST" data-netlify="true">
          <Text.Label>Contact Me</Text.Label>
          <TextField placeholder="Your name" type="text" />
          <TextField placeholder="Your email" type="email" />
          <TextArea placeholder="Your message" />
          <Button type="submit">Send</Button>
        </form>
      </section>
    );
  }
}

export default styled(ContactPage)`
  ${css}
`;
