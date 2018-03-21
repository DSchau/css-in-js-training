import React, { Fragment } from 'react';
import styled, { injectGlobal } from 'styled-components';
import qs from 'qs';
import 'prismjs/themes/prism-tomorrow.css';

import { Storyboard, StoryboardTitle } from '../components';
import { FADE_IN_BOTTOM, getColorFromString, MEDIA } from '../style';

const Container = styled.div`
  transform: translateY(50vh) scale(0.5);
  transform-origin: 50% 0;

  opacity: 0;
  animation: ${FADE_IN_BOTTOM} 300ms cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const TitleContainer = styled.div`
  padding: 2rem;
  text-align: center;
  min-height: 80px;
  position: relative;

  background-color: ${props => props.backgroundColor};
  border-bottom: 1px solid ${props => props.borderColor};
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

  border: 1px solid ${props => props.borderColor};
  border-top-width: 0;

  transform: translateY(32px) scale(0.99);
  transform-origin: 50% 0;
  opacity: 0;

  animation: ${FADE_IN_BOTTOM} 300ms cubic-bezier(0.39, 0.575, 0.565, 1) 250ms 1
    normal both;

  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
  ${MEDIA['medium']} {
    padding: 2rem 1rem;
  }
`;

const Content = styled.div``;

export default function Lesson({ data, location }) {
  const { unit } = data;
  const { title } = unit.frontmatter;
  const color = {
    base: getColorFromString(title),
    darkened: getColorFromString(title, 50, 20),
    lightened: getColorFromString(title, 50, 90)
  };
  const { storyboard: isStoryboard } = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  return (
    <Container>
      <TitleContainer backgroundColor={color.base} borderColor={color.darkened}>
        <Title>{title}</Title>
      </TitleContainer>
      <ContentContainer borderColor={color.lightened}>
        {isStoryboard && (
          <Fragment>
            <Storyboard {...unit.frontmatter} />
            <StoryboardTitle>Content</StoryboardTitle>
          </Fragment>
        )}
        <Content dangerouslySetInnerHTML={{ __html: unit.html }} />
      </ContentContainer>
    </Container>
  );
}

export const pageQuery = graphql`
  query UnitBySlugQuery($slug: String!) {
    unit: markdownRemark(fields: { slug: { eq: $slug } }) {
      ...UnitFragment
    }
  }
`;

injectGlobal`
  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }

  .gatsby-highlight {
    background-color: #2d2d2d;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }
`;
