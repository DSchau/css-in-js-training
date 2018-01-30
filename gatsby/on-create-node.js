const slugify = require('limax');

module.exports = function createNode({ node, boundActionCreators, getNode }) {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const { sourceInstanceName: type } = getNode(node.parent);

    switch (type) {
      case 'content':
        createNodeField({ node, name: 'type', value: 'content' });
        createNodeField({ node, name: 'slug', value: slugify(node.frontmatter.title) });
        break;
    }

  }
};
