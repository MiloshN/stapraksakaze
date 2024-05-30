import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {        
    siteUrl: "https://gatsby-blog-theme-starter.netlify.app/",
    title: "Šta praksa kaže?",
    description: "Šta praksa kaže? - Blog namenjen IT temama",
    image: "",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    "gatsby-plugin-static-cms",
  ],
};

export default config;
