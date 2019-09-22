import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const PostWrapper = styled.div`
  margin: 0 auto;
  text-align: left;
  max-width: 750px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0;
  }

  li,
  p {
    margin-bottom: 0.5rem;
  }

  p > img {
    width: 100%;
    margin: 0.5rem 0;
  }

  pre {
    padding: 0.5rem;
  }
  pre,
  pre code {
    overflow: scroll;
    // white-space: pre-wrap;
    background-color: antiquewhite;
  }
`;

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdownText: "" };
  }

  componentDidMount() {
    const {
      match: {
        params: { postId }
      }
    } = this.props;

    fetch(require(`../../../Posts/${postId}.markdown`))
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdownText: text
        });
      })
      .catch(err => {
        // TODO : Redirect to error page!
        console.log(err);
      });
  }

  render() {
    const { markdownText } = this.state;
    return (
      <PostWrapper>
        <ReactMarkdown source={markdownText} />
      </PostWrapper>
    );
  }
}

export default PostPage;
