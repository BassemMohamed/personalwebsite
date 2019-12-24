import React from "react";
import styled from "styled-components";
import BlogPosts from "../../../posts";
import css from "./PostPage.style";
import ReactMarkdown from "react-markdown";
import { Label } from "../../UI/Text";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: {}, markdownText: "" };
  }

  componentDidMount() {
    const {
      match: {
        params: { postId }
      }
    } = this.props;

    const post = BlogPosts.filter(item => item.key === postId)[0];
    fetch(require(`../../../posts/${postId}.markdown`))
      .then(response => {
        return response.text();
      })
      .then(markdownText => {
        this.setState({
          markdownText,
          post
        });
      })
      .catch(err => {
        // TODO: Redirect to error page!
        console.log(err);
      });
  }

  render() {
    const { post, markdownText } = this.state;
    return (
      <div className={this.props.className}>
        <div className="post_cover">
          <img alt={post.name} src={post.coverImage} />
          <Label>{post.name}</Label>
          <p>Published: {post.published}</p>
        </div>
        <ReactMarkdown source={markdownText} />
      </div>
    );
  }
}

export default styled(PostPage)`
  ${css}
`;
