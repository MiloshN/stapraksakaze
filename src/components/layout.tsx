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
            <Link to="/">{meta.title}</Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </header>
      <main className={styles.content}>{children}</main>
    </>
  );
};

export default Layout;
