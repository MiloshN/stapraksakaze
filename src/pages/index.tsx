import React from "react";
import Layout from "../components/layout";
import NetlifyLogo from "../images/svg/netlifyLogo";
import PlusIcon from "../images/svg/plusIcon";
import GatsbyLogo from "../images/svg/gatsbyLogo";
import * as styles from "../styles/home.module.css";

const IndexPage = () => {
  return (
    <Layout>
      <div className={styles.logoContainer}>
        <NetlifyLogo height={80} />
        <PlusIcon height={32} />
        <GatsbyLogo height={80} />
      </div>
      <h1>Hello Frontend Masters!</h1>
    </Layout>
  );
};

export default IndexPage;
