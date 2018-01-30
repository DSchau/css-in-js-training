import React from 'react';

export default function Content({ data }) {
  const { content } = data;
  return (
    <div dangerouslySetInnerHTML={{ __html: content.html }} />
  );
}

export const pageQuery = graphql`
  query ContentPageQuery($slug: String!) {
    content: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;
