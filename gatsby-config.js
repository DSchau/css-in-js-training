const fs = require('fs');
const path = require('path');

const base = path.resolve('content/modules');

const content = fs
  .readdirSync(base)
  .filter(fileOrFolder =>
    fs.statSync(path.join(base, fileOrFolder)).isDirectory()
  )
  .map(lesson => ({
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'modules',
      path: path.join(base, lesson)
    }
  }))
  .concat([
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    }
  ]);

module.exports = {
  siteMetadata: {
    domain: 'https://css-in-js-training.dustinschau.com',
    title: 'CSS in JS with Styled Components and React'
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/util/typography'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-smartypants',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              maxWidth: 800
            }
          }
        ]
      }
    }
  ].concat(content)
};
