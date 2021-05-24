require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: process.env.BASE_URL,
    title: "K.W.info",
    description: "K.W.の日常ブログです。",
    author: "K.W.",
    twitter: "@waigo001",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "K.W.info",
        short_name: "K.W.info",
        start_url: "/",
        background_color: "#918a99",
        theme_color: "#918a99",
        display: "minimal-ui",
        icon: "src/images/favicon.jpg",
      },
    },

    {
      resolve: "gatsby-plugin-typegen",
      options: {
        emitSchema: {
          "src/__generated__/gatsby-schema.graphql": true,
        },
        outputPath: "src/__generated__/gatsby-types.d.ts",
      },
    },
    "gatsby-plugin-twitter",
    "gatsby-plugin-typescript",
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [],
      },
    },
    {
      resolve: "gatsby-plugin-emotion",
    },
  ],
}
