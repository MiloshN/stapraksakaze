import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: "https://gatsby-blog-theme-starter.netlify.app/",
    title: "Gatsby Blog Theme Starter",
    description: "A Gatsby Blog Theme Starter using TypeScript and CSS Modules",
    image: "",
  },
  plugins: ["gatsby-plugin-react-helmet"],
};

export default config;
