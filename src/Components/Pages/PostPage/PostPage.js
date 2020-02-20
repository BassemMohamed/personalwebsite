import React from "react";
import styled from "styled-components";
import BlogPosts from "../../../posts";
import css from "./PostPage.style";
import ReactMarkdown from "react-markdown";
import { Text } from "../../UI";

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
    const { className } = this.props;
    const { post, markdownText } = this.state;
    return (
      <article className={className}>
        <div className="post_cover">
          <img alt={post.name} src={post.coverImage} />
          <Text.Label>{post.name}</Text.Label>
          <p>Published: {post.published}</p>
        </div>
        <div className="post_body">
          <ReactMarkdown source={markdownText} />
        </div>
      </article>
    );
  }
}

export default styled(PostPage)`
  ${css}
`;
