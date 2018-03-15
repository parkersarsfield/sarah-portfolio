module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [`cabin sketch`, `source sans`]
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `photography`,
      path: `${__dirname}/src/pages/photography`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `socialmedia`,
      path: `${__dirname}/src/pages/socialmedia`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `painting`,
      path: `${__dirname}/src/pages/painting`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `graphics`,
      path: `${__dirname}/src/pages/graphics`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `media`,
      path: `${__dirname}/src/media`,
    },
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
],
};
