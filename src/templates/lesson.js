import React from 'react';
import styled from 'styled-components';

import { FADE_IN_BOTTOM, getColorFromString, MEDIA } from '../style';

const Container = styled.div`
  transform: translateY(50vh) scale(0.5);
  transform-origin: 50% 0;
  opacity: 0;

  animation: ${FADE_IN_BOTTOM} 250ms cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const TitleContainer = styled.div`
  padding: 2rem;
  text-align: center;
  min-height: 80px;
  position: relative;

  background-color: ${props => props.backgroundColor};
`;

const Title = styled.h1`
  margin: 0;
  color: white;
  font-size: 40px;
  font-weight: 700;
  position: relative;
  z-index: 2;
`;

const ContentContainer = styled.div`
  background-color: white;

  outline: 1px solid rgba(0, 0, 0, 0.125);

  transform: translateY(32px) scale(0.99);
  transform-origin: 50% 0;
  opacity: 0;

  animation: ${FADE_IN_BOTTOM} 250ms cubic-bezier(0.39, 0.575, 0.565, 1) 250ms 1
    normal both;

  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
  ${MEDIA['medium']} {
    padding: 2rem 1rem;
  }
`;

const Content = styled.div``;

export default function Lesson({ data }) {
  const { lesson } = data;
  const { title } = lesson.frontmatter;
  const color = {
    base: getColorFromString(title)
  };
  return (
    <Container>
      <TitleContainer backgroundColor={color.base}>
        <Title>{title}</Title>
      </TitleContainer>
      <ContentContainer>
        <Content dangerouslySetInnerHTML={{ __html: lesson.html }} />
      </ContentContainer>
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
