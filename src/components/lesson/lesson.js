import React from 'react';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

import { getColorFromString } from '../../style';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: white;
  box-shadow: 0 2px 8px rgba(34, 83, 120, 0.175);
  margin: 10px;
  transition: 175ms ease-in-out;

  :hover {
    transform: scale(1.025) translateY(-4px);
    box-shadow: 0 2px 10px rgba(34, 83, 120, 0.25);
  }
`;

const TitleContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: 2rem;
  margin-bottom: 12px;
  text-align: center;

  min-height: 80px;

  position: relative;
`;

const Title = styled.h1`
  margin: 0;
  color: white;
  font-size: 24px;
  font-weight: 700;

  text-shadow: 0 0 2px ${props => props.textShadow};
`;

const Category = styled.span`
  display: block;
  background-color: white;
  color: ${props => props.color};
  font-size: 12px;
  padding: 4px;

  text-align: center;

  margin-top: auto;
`;

const Link = styled(GatsbyLink)`
  display: flex;
  color: inherit;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
`;

const Description = styled.p`
  margin: 0;
  line-height: 2;

  color: #444;
`;

const LessonIndex = styled.h3`
  margin: 0;

  font-size: 80px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  color: rgba(255, 255, 255, 0.25);
`;

export function Lesson({ fields, frontmatter, html, number }) {
  const { description, title } = frontmatter;
  const color = {
    base: getColorFromString(title),
    darkened: getColorFromString(title, 50, 15)
  };
  return (
    <Link to={fields.slug}>
      <Container>
        <TitleContainer backgroundColor={color.base}>
          <Title textShadow={color.darkened}>{title}</Title>
          <LessonIndex>{number}</LessonIndex>
        </TitleContainer>
        <Content>
          <Description>{description}</Description>
          <Category color={color.base}>{fields.section}</Category>
        </Content>
      </Container>
    </Link>
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
      description
      title
    }
  }
`;
