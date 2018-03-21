const slugify = require('limax');
const path = require('path');

module.exports = function createNode({ node, boundActionCreators, getNode }) {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const { sourceInstanceName: type } = getNode(node.parent);

    switch (type) {
      case 'content':
        createNodeField({ node, name: 'type', value: 'content' });
        createNodeField({
          node,
          name: 'slug',
          value: slugify(node.frontmatter.title)
        });
        break;
      case 'modules':
        const basename = path
          .dirname(node.fileAbsolutePath)
          .split(path.sep)
          .pop();
        const section = basename.replace(/^\d+-/, '');
        createNodeField({ node, name: 'type', value: 'unit' });
        createNodeField({
          node,
          name: 'slug',
          value: ['modules', section, node.frontmatter.title]
            .map(part => slugify(part))
            .join('/')
        });
        createNodeField({ node, name: 'section', value: section });
        break;
    }
  }
};
