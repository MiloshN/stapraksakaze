import React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/home.module.css";
import { Link, graphql, useStaticQuery } from "gatsby";

// const features = [
//   {
//     text: "Blazing fast",
//     icon: LightningLogo,
//   },
//   {
//     text: "JAMstack based",
//     icon: JamstackLogo,
//   },
//   {
//     text: "Editable content",
//     icon: EditIcon,
//   },
//   {
//     text: "Great scores",
//     icon: LighthouseLogo,
//   },
// ];

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD YYYY")
            author
            title
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className={styles.logoContainer}>
        <p>Supported by:</p>
        <a href="https://codebears.io/" target="_blank"><img width={80} height={80} src="https://codebears.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcode-bears-logo-simple-transparent.c6655c64.png&w=3840&q=75" /></a>
      </div>
      <h1>Šta praksa kaže?</h1>
      <h2>Šta praksa kaže? - Blog namenjen IT temama</h2>

      <div className={styles.features}>
        {/* {features.map(({ text, icon: Icon }) => (
          <div className={styles.feature} key={text}>
            {Icon && <Icon height={24} width={24} />}
            <h4>{text}</h4>
          </div>
        ))} */}
      </div>

      {posts.length === 0 && (
        <p className={styles.noPosts}>There are no posts yet</p>
      )}
      {posts.map((post, id) => (
        <div className={styles.postPreview} key={id}>
          <h3>
            <span className={styles.titleContainer}>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            </span>
          </h3>

          {post.frontmatter.author.length > 0 && (
            <div className={styles.authors}>By: {post.frontmatter.author}</div>
          )}
          {post.frontmatter.date && (
            <div className={styles.posted}>Posted: {post.frontmatter.date}</div>
          )}
          {post.excerpt && <p>{post.excerpt}</p>}
        </div>
      ))}
    </Layout>
  );
};

export default IndexPage;
