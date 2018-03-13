import React from 'react';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #EEE;

  margin: 10px;
`;

const Link = styled(GatsbyLink)`
  color: inherit;
`;

export function Lesson({ fields, html }) {
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: html }} />

      <Link to={fields.slug}>Learn more</Link>
    </Container>
  );
}

export const lessonFragment = graphql`
  fragment LessonFragment on MarkdownRemark {
    id
    html
    fields {
      section
      slug
    }
  }
`;
