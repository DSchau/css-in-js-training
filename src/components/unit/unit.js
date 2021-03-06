import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink, graphql } from 'gatsby';

import { MEDIA, getColorFromString } from '../../style';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  transition: 175ms ease-in-out;
  outline: 1px solid rgba(0, 0, 0, 0.25);

  :hover {
    transform: scale(1.025) translateY(-4px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
  }

  .gatsby-resp-image-link {
    margin-left: calc(-1 * (10px + 1rem));
    margin-right: calc(-1 * (10px + 1rem));
  }
`;

const TitleContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: 2rem;
  text-align: center;

  min-height: 80px;

  position: relative;
`;

const Title = styled.h1`
  margin: 0;
  color: white;
  font-size: 24px;
  font-weight: 700;
  position: relative;
  z-index: 2;

  text-shadow: 0 0 2px ${props => props.textShadow};
`;

const Category = styled.div`
  background-color: white;
  color: ${props => props.color};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 4px;
  margin-top: auto;

  border: 1px solid ${props => props.color};
  border-left-width: 0;
  border-right-width: 0;

  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
`;

const Description = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 14px;
  line-height: 2;

  color: #444;
`;

const UnitIndex = styled.h3`
  margin: 0;

  font-size: 80px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%) scale(1.25);

  color: ${props => props.color || 'rgba(255, 255, 255, 0.25)'};
`;

const Link = styled(GatsbyLink)`
  display: flex;
  margin: 0.5rem;

  ${MEDIA.medium`
    margin: 1rem;
  `};
`;

export function Unit({ fields, frontmatter, html, number }) {
  const { description, title } = frontmatter;
  const color = {
    base: getColorFromString(title),
    lightened: getColorFromString(title, 50, 75),
    darkened: getColorFromString(title, 50, 15),
    section: getColorFromString(fields.section)
  };
  return (
    <Link to={fields.slug}>
      <Container>
        <TitleContainer backgroundColor={color.base}>
          <Title textShadow={color.darkened}>{title}</Title>
          <UnitIndex>{number}</UnitIndex>
        </TitleContainer>
        <Content>
          <Description>{description}</Description>
          <Category color={color.section}>{fields.section}</Category>
        </Content>
      </Container>
    </Link>
  );
}

export const unitFragment = graphql`
  fragment UnitFragment on MarkdownRemark {
    id
    html
    fields {
      section
      slug
    }
    frontmatter {
      description
      diagrams
      examples
      title
      takeaways
      video
    }
  }
`;
