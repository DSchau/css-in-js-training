import React from 'react';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgba(172, 240, 242, 0.3);
  outline: 1px solid #1595a3;
  margin: 10px;
  padding: 10px;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 700;
`;

const Link = styled(GatsbyLink)`
  color: inherit;
`;

export function Lesson({ fields, frontmatter, html }) {
  return (
    <Container>
      <Title>{frontmatter.title}</Title>
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
    frontmatter {
      title
    }
  }
`;
