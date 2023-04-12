import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";

import "../styles/global.css";
import * as styles from "../styles/layout.module.css";
import Seo from "./seo";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}

const Layout = ({ children, title, description, image, path }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo
        title={title}
        description={description}
        image={image}
        siteUrl={path}
      />
      <header className={styles.header}>
        <ul>
          <li>
            <Link to="/" activeClassName="active">
              {meta.title}
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/davidschinteie/gatsby-blog-theme.git"
            >
              Source Code
            </a>
          </li>
        </ul>
      </header>
      <main className={styles.content}>{children}</main>
      <footer>
        © {new Date().getFullYear()} - Built with
        {` `} Gatsby, StaticCMS & Netlify by {` `}
        <a href="https://www.gatsbyjs.comhttps://github.com/davidschinteie">
          David Schinteie
        </a>
      </footer>
    </>
  );
};

export default Layout;
