import React from 'react';
import styled from 'styled-components';

import { Lessons } from '../components';

const Container = styled.div``;

export default function IndexPage({ data }) {
  const { lessons } = data;
  return (
    <Container>
      <Lessons list={lessons.edges} />
    </Container>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    lessons:allMarkdownRemark(
      filter:{fields:{type:{eq:"lesson"}}}
      sort:{order:ASC, fields:[id]}
    ) {
        edges {
          node {
            ...LessonFragment
          }
        }
      }
  }
`;
