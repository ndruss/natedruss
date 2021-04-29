module.exports = {
  siteMetadata: {
    title: 'Nate Druss',
    description: 'A Front-End Developer in Cleveland, Ohio',
    url: 'https://natedruss.com',
    image: '/og-image.png',
    fontUrl:
      'https://fonts.googleapis.com/css?family=Source+Code+Pro:300,300i,500,500i,600,600i&display=swap',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-172471674-1',
      },
    },
  ],
}
