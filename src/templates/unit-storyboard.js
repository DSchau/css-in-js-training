import React from 'react';
import { graphql } from 'gatsby';

import Unit from './unit';

export default function UnitStoryboard(props) {
  return <Unit storyboard={true} {...props} />;
}

export const pageQuery = graphql`
  query UnitBySlugQueryWithStoryboard($slug: String!) {
    unit: markdownRemark(fields: { slug: { eq: $slug } }) {
      ...UnitFragment
    }

    site {
      siteMetadata {
        domain
      }
    }
  }
`;
