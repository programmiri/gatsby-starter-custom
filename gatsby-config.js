module.exports = {
  siteMetadata: {
    title: 'Gatsby with Bootstrap 4, Jest and Enzym',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
  ],
}
