import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import { About, Units } from '../components';
import { MEDIA } from '../style';

const Container = styled.div``;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;

  margin: 1rem auto;

  ${MEDIA.medium`
    grid-template-columns: 45% 55%;
    margin: 2rem auto;
  `};
`;

export default function IndexPage({ data }) {
  const { about, learn, meta = {}, units } = data;
  return (
    <Container>
      <AboutContainer>
        <About
          title="About the instructor"
          html={about.html}
          image={about.frontmatter.avatar}
        />
        <About
          title="What you'll learn"
          html={meta.description}
          image={learn}
          inverted
        />
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

    learn: file(absolutePath: { regex: "/images/learn.jpeg/" }) {
      childImageSharp {
        resolutions(width: 125, height: 125) {
          ...GatsbyImageSharpResolutions_tracedSVG
        }
      }
    }

    meta: contentYaml {
      description
    }
  }
`;
