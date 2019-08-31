import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const PostWrapper = styled.div``;

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdownText: "" };
  }

  componentDidMount() {
    const { markdownFileKey } = this.props;

    fetch(require(`../../../posts/${markdownFileKey}.markdown`))
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdownText: text
        });
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
