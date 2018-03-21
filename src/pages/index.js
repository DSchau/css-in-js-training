import React from 'react';
import styled, { css } from 'styled-components';
import GatsbyImage from 'gatsby-image';

import { About, Units } from '../components';
import { MEDIA } from '../style';

const Container = styled.div`
  padding: 1rem;
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;

  margin: 1rem auto;

  ${MEDIA.medium`
    grid-template-columns: 45% 55%;
    margin: 2rem auto;
  `};
`;

const AboutMe = styled.div`
  background-color: white;
  transition: 175ms ease-in-out;
  outline: 1px solid rgba(34, 83, 120, 1);

  margin: 1rem;

  .gatsby-image-outer-wrapper {
    text-align: center;
  }
`;

const AboutCourse = styled(AboutMe)`
  background-color: rgba(34, 83, 120, 0.95);
`;

const AboutHeader = styled.h1`
  color: rgba(34, 83, 120, 1);
  background-color: white;

  font-size: 22px;
  margin: 0;
  padding: 0.5rem 1rem;

  text-align: center;
  text-transform: uppercase;

  ${MEDIA.medium`
    font-size: 28px;
  `} ${props =>
    props.inverted &&
    css`
      color: white;
      background-color: rgba(34, 83, 120, 1);
    `};
`;

const Description = styled.p`
  color: white;

  margin: 0;
  padding: 1rem;

  font-size: 16px;
  line-height: 2;

  ${props =>
    props.inverted &&
    css`
      color: rgba(34, 83, 120, 1);
    `};
`;

const Image = styled(GatsbyImage)`
  border-radius: 100%;
  text-align: center;
  margin: 0.5rem auto;
`;

export default function IndexPage({ data }) {
  const { about, image, meta = {}, units } = data;
  return (
    <Container>
      <AboutContainer>
        <About
          title="About the instructor"
          html={about.html}
          avatar={about.frontmatter.avatar}
        />
        <About title="What you'll learn" html={meta.description} inverted />
      </AboutContainer>
      <Units list={units.edges} />
    </Container>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    units: allMarkdownRemark(
      filter: { fields: { type: { eq: "unit" } } }
      sort: { order: ASC, fields: [id] }
    ) {
      edges {
        node {
          ...UnitFragment
        }
      }
    }

    about: markdownRemark(fileAbsolutePath: { regex: "/content/bio.md/" }) {
      html
      frontmatter {
        avatar {
          childImageSharp {
            resolutions(width: 125, height: 125) {
              ...GatsbyImageSharpResolutions_tracedSVG
            }
          }
        }
        twitter
      }
    }

    meta: contentYaml {
      description
    }
  }
`;
