module.exports = {
  siteMetadata: {
    title: `Cedars of Lebanon`,
    description: `Serving the best gyros and falafels in Seattle since 1976. Our food is fresh, delicious, and fast. We do takeout and dine-in everyday except Sunday.`,
    author: `@ilestkempo`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/48x48.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Lato:ital,wght@0,400;1,700'],
          text: 'abcdefghijklmnopqrstuvwxyz!1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
      }
    }
  ],
}
