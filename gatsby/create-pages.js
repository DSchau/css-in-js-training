const path = require('path');

module.exports = function createPages({ boundActionCreators, graphql }) {
  const { createPage } = boundActionCreators;

  const contentTemplate = path.resolve('src/templates/content.js');
  const lessonTemplate = path.resolve('src/templates/unit.js');

  return graphql(`
    {
      content: allMarkdownRemark(
        filter: { fields: { type: { eq: "content" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      units: allMarkdownRemark(filter: { fields: { type: { eq: "unit" } } }) {
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
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const { content, units } = result.data;

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

    units.edges.forEach(({ node }) => {
      const { slug } = node.fields;
      createPage({
        path: `/${slug}`,
        component: lessonTemplate,
        context: {
          slug
        }
      });
    });
  });
};
