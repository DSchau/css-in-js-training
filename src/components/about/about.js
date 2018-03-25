import React from 'react';
import styled, { css } from 'styled-components';
import GatsbyImage from 'gatsby-image';

import { MEDIA } from '../../style';

const Container = styled.div`
  background-color: white;
  transition: 175ms ease-in-out;
  outline: 1px solid rgba(34, 83, 120, 1);

  margin: 1rem;

  ${props =>
    props.inverted &&
    css`
      background-color: rgba(34, 83, 120, 1);

      > .title {
        color: rgba(34, 83, 120, 1);
        background-color: white;
      }

      > .description {
        color: white;
      }
    `} .gatsby-image-outer-wrapper {
    text-align: center;
  }
`;

const Title = styled.h1`
  color: white;
  background-color: rgba(34, 83, 120, 1);

  font-size: 22px;
  margin: 0;
  padding: 0.5rem 1rem;

  text-align: center;
  text-transform: uppercase;

  ${MEDIA.medium`
    font-size: 28px;
  `};
`;

const Image = styled(GatsbyImage)`
  border-radius: 100%;
  text-align: center;
  margin: 0.5rem auto;
`;

const Description = styled.div`
  color: rgba(34, 83, 120, 1);

  margin: 0;
  padding: 1rem;

  font-size: 16px;
  line-height: 2;

  a {
    color: #1595a3;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-skip: ink;
  }

  a:hover {
    color: #1595a3;
    text-decoration: none;
  }
`;

export function About({ image, html, title, inverted, ...rest }) {
  return (
    <Container inverted={inverted} {...rest}>
      <Title className="title">{title}</Title>
      {image && <Image resolutions={image.childImageSharp.resolutions} />}
      <Description
        className="description"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Container>
  );
}
