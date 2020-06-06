import React from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import BlogPosts from '../../assets/posts';
import { Label } from '../../UI';
import css from './PostPage.style';

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
    fetch(require(`../../assets/posts/${postId}.markdown`))
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
      <>
        <Helmet>
          <title>{post.name}</title>
          <meta name="description" content={post.description} />
        </Helmet>
        <article className={className}>
          <div className="post_cover">
            <img alt={post.name} src={post.coverImage} />
            <Label>{post.name}</Label>
            <p>Published: {post.published}</p>
          </div>
          <div className="post_body">
            <ReactMarkdown source={markdownText} />
          </div>
        </article>
      </>
    );
  }
}

export default styled(PostPage)`
  ${css}
`;
