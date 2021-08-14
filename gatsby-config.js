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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-N5R5F3X",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-image",
      options: {
        defaults: {
          formats: ["webp"],
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
    },
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
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.NOTION_TOKEN,
        databaseId: process.env.NOTION_DATABASE,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              icon: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-emotion",
    },
  ],
}
