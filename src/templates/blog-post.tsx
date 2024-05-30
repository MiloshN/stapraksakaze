import React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/blog.module.css";
import { graphql } from "gatsby";

const BlogPostTemplate = ({ data: { markdownRemark: post } }) => {
  const blogTitle = post.frontmatter.title;

  return (
    <Layout>
      <div className={styles.post}>
        <h1>{post.frontmatter.title}</h1>
        {post.frontmatter.author && (
          <div className="authors">By: {post.frontmatter.author}</div>
        )}
        {post.frontmatter.date && (
          <div className="posted">Posted: {post.frontmatter.date}.</div>
        )}

        <hr />

        {(!post.html || post.html.length === 0) && (
          <p>This post has no content</p>
        )}

        {post.html && post.html.length !== 0 && (
          <article
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        )}
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        author
        date(formatString: "DD.MM.YYYY")
        description
        title
      }
      html
    }
  }
`;
