module.exports = {
  siteMetadata: {
    title: `Official Website for FANGA`,
    description: `This is the official website for producer and DJ, FANGA.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Official Website for FANGA`,
        description: `This is the official website for producer and DJ, FANGA.`,
        icon: `src/images/facivon.png`,
        short_name: `FANGA`,
        start_url: `/`,
        background_color: `#F4F4F4`,
        theme_color: `#32D8D6`,
        display: `standalone`,
        lang: `en`,
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/images/, // See below to configure properly
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
