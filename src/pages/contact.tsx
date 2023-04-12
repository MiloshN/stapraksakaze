import React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/contact.module.css";

import GatsbyLogo from "../images/svg/gatsbyLogo";
import GitHubLogo from "../images/svg/githubLogo";
import LinkedInLogo from "../images/svg/linkedinLogo";
import HashnodeLogo from "../images/svg/hashnodeLogo";

const contacts = [
  {
    Logo: GitHubLogo,
    alt: "github icon",
    link: "https://github.com/davidschinteie",
  },
  {
    Logo: LinkedInLogo,
    alt: "linkedin icon",
    link: "https://www.linkedin.com/in/david-schinteie-0804ab95/",
  },
  {
    Logo: HashnodeLogo,
    alt: "hashnode icon",
    link: "https://davidschinteie.hashnode.dev/",
  },
];

const ContactPage = () => {
  return (
    <Layout title="Contact Page">
      <div className={styles.avatar}>
        <GatsbyLogo height={160} />
      </div>
      <h1>Contact</h1>
      <div className={styles.name}>David Schinteie - Front End Engineer</div>

      <div className={styles.links}>
        {contacts.map(({ Logo, link, alt }) => {
          return (
            <a key={link} href={link} title={alt}>
              <Logo height={32} />
            </a>
          );
        })}
      </div>
    </Layout>
  );
};

export default ContactPage;
