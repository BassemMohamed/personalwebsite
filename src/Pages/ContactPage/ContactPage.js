import React from "react";
import styled from "styled-components";
import { Text, TextField, TextArea, Button } from "../../UI/";
import css from "./ContactPage.style";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      formMessage: "",
      message: ""
    };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() =>
        this.setState({
          userMessage: "Thanks, Your message have been delivered!"
        })
      )
      .catch(error =>
        this.setState({
          userMessage: error
        })
      );

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, userMessage } = this.state;
    const { className } = this.props;
    return (
      <section className={className} onSubmit={this.handleSubmit}>
        {userMessage && <Text.Label>{userMessage}</Text.Label>}
        {!userMessage && (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <Text.Label>Contact Me</Text.Label>
            <TextField
              type="text"
              name="name"
              value={name}
              placeholder="Your name"
              onChange={this.handleChange}
            />
            <TextField
              required
              type="email"
              name="email"
              value={email}
              placeholder="Your email"
              onChange={this.handleChange}
            />
            <TextArea
              rows="4"
              required
              name="message"
              value={message}
              placeholder="Your message"
              onChange={this.handleChange}
            />
            <Button type="submit">Send</Button>
          </form>
        )}
      </section>
    );
  }
}

export default styled(ContactPage)`
  ${css}
`;
