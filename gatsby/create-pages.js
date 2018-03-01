const path = require('path');

module.exports = function createPages({ boundActionCreators, graphql }) {
  const { createPage, createRedirect } = boundActionCreators;

  const contentTemplate = path.resolve('src/templates/content.js');

  createRedirect({
    fromPath: '/',
    isPermanant: true,
    redirectInBrowser: true,
    toPath: '/proposal'
  });

  return graphql(`
    {
      content:allMarkdownRemark(filter:{fields:{type:{eq:"content"}}}) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      const {
        content,
      } = result.data;

      content.edges.forEach(({ node }) => {
        const { slug } = node.fields;
        createPage({
          path: `/${slug}`,
          component: contentTemplate,
          context: {
            slug
          }
        });
      });

    });
};
