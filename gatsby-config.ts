import { type GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  pathPrefix: '/lecture-abstracts',
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-135348958-2',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Binary Studio Academy',
        short_name: 'BSA',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/icon-48x48.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '~': 'src',
        },
      },
    },
  ],
};

export default config;
