import React from 'react';
import { graphql } from 'gatsby';

export default function Content({ data }) {
  const { content } = data;
  const { html, tableOfContents } = content;
  return (
    <React.Fragment>
      <h2>Table of Contents</h2>
      <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query ContentPageQuery($slug: String!) {
    content: markdownRemark(fields: { slug: { eq: $slug } }) {
      tableOfContents
      html
    }
  }
`;
