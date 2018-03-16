import React from 'react';
import styled from 'styled-components';

import { getColorFromString } from '../style';

const Container = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.backgroundColor};
  padding: 2rem 0.5rem;
  text-align: center;

  min-height: 80px;

  position: relative;
`;

const Title = styled.h1`
  margin: 0;
  margin-left: auto;
  color: white;
  font-size: 48px;
  font-weight: 700;
  position: relative;
  z-index: 2;

  text-align: center;
  text-shadow: 0 0 2px ${props => props.textShadow};
  width: 100%;
`;

export default function Lesson({ data, transition }) {
  const { lesson } = data;
  const { frontmatter } = lesson;

  const color = {
    base: getColorFromString(frontmatter.title),
    darkened: getColorFromString(frontmatter.title, 50, 15)
  };

  console.log(transition);

  return (
    <Container style={transition && transition.style}>
      <TitleContainer backgroundColor={color.base}>
        <Title textShadow={color.darkened}>{frontmatter.title}</Title>
      </TitleContainer>
      <div dangerouslySetInnerHTML={{ __html: lesson.html }} />
    </Container>
  );
}

export const pageQuery = graphql`
  query LessonBySlugQuery($slug: String!) {
    lesson: markdownRemark(fields: { slug: { eq: $slug } }) {
      ...LessonFragment
    }
  }
`;
