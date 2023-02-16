import { createFilePath } from 'gatsby-source-filesystem';
import { GatsbyNode } from 'gatsby';

const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode }),
    });
  }
};

const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  stage,
  loaders,
  actions,
}) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /chartjs-plugin-dragdata/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

export { onCreateNode, onCreateWebpackConfig };
