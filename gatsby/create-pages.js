const path = require('path');

module.exports = function createPages({ boundActionCreators, graphql }) {
  const { createPage } = boundActionCreators;

  const contentTemplate = path.resolve('src/templates/content.js');
  const unitTemplate = path.resolve('src/templates/unit.js');
  const unitTemplateWithStoryboard = path.resolve(
    'src/templates/unit-storyboard.js'
  );

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
      units: allMarkdownRemark(
        filter: { fields: { type: { eq: "unit" } } }
        sort: { order: ASC, fields: [id] }
      ) {
        edges {
          node {
            id
            html
            fields {
              section
              slug
            }
            frontmatter {
              description
              diagrams
              examples
              title
              takeaways
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

    units.edges.forEach(({ node }, index) => {
      const { slug } = node.fields;
      const next =
        index + 1 === units.edges.length ? false : units.edges[index + 1].node;
      const prev = index === 0 ? false : units.edges[index - 1].node;
      const context = {
        slug,
        prev,
        next
      };
      createPage({
        path: `/${slug}`,
        component: unitTemplate,
        context
      });
      createPage({
        path: `/${slug}/storyboard`,
        component: unitTemplateWithStoryboard,
        context
      });
    });
  });
};
