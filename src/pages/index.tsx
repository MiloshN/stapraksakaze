import React from "react";
import Layout from "../components/layout";
import NetlifyLogo from "../images/svg/netlifyLogo";
import PlusIcon from "../images/svg/plusIcon";
import GatsbyLogo from "../images/svg/gatsbyLogo";
import StaticcmsLogo from "../images/svg/staticcmsLogo";
import LightningLogo from "../images/svg/lightningLogo";
import JamstackLogo from "../images/svg/jamstackLogo";
import EditIcon from "../images/svg/editIcon";
import LighthouseLogo from "../images/svg/lighthouseLogo";
import * as styles from "../styles/home.module.css";

const features = [
  {
    text: "Blazing fast",
    icon: LightningLogo,
  },
  {
    text: "JAMstack based",
    icon: JamstackLogo,
  },
  {
    text: "Editable content",
    icon: EditIcon,
  },
  {
    text: "Great scores",
    icon: LighthouseLogo,
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <div className={styles.logoContainer}>
        <StaticcmsLogo height={80} />
        <PlusIcon height={32} />
        <GatsbyLogo height={80} />
        <PlusIcon height={32} />
        <NetlifyLogo height={80} />
      </div>
      <h1>Static CMS with Gatsby on Netlify</h1>
      <h2>Blazing Fast Blog with Gatsby.js</h2>

      <div className="features">
        {features.map(({ text, icon: Icon }) => (
          <div className="feature" key={text}>
            {Icon && <Icon height={24} width={24} />}
            <h4>{text}</h4>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
