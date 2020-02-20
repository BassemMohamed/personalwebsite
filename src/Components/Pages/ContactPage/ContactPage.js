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
          <div>
            <Text.Label>Your Name</Text.Label>
            <TextField placeholder="Please enter your name" type="text" />
          </div>
          <div>
            <Text.Label>Your Email</Text.Label>
            <TextField placeholder="Please enter your email" type="email" />
          </div>
          <div>
            <Text.Label>Your Message</Text.Label>
            <TextArea placeholder="Please enter your message" />
          </div>
          <Button type="submit">Send</Button>
        </form>
      </section>
    );
  }
}

export default styled(ContactPage)`
  ${css}
`;
