import React, { Component } from 'react'
import GatsbyLink from 'gatsby-link'
import styled, { injectGlobal } from 'styled-components';

import { MEDIA, WIGGLE_AND_SCALE } from '../../style';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #1595A3;

  position: relative;
`;

const Title = styled.h1`
  font-family: 'Bungee', cursive;
  font-size: 50px;
  font-weight: 400;
  padding: 1rem;
  position: relative;
  z-index: 2;
  pointer-events: none;
  :hover {
    animation: ${WIGGLE_AND_SCALE} 750ms ease-in-out 250ms;
  }

  ${MEDIA.small`
    font-size: 90px;
  `}

  ${MEDIA.medium`
    font-size: 100px;
  `}

  ${MEDIA.large`
    font-size: 140px;
  `}
`;

const Subtitle = styled(Title)`
  font-family: 'Bungee', cursive;
  background-color: #F2FFE3;
  color: #1595A3;
  font-size: 16px;
  margin: 0;
  padding: 1rem;
  white-space: no-wrap;

  ${MEDIA.small`
    font-size: 20px;
  `}

  ${MEDIA.medium`
    font-size: 22px;
  `}

  ${MEDIA.large`
    font-size: 32px;
  `}
`.withComponent('h2');

export class Header extends Component {
  componentDidMount() {
    require.ensure(['@dschau/particles.js', '../../particles.json'], () => {
      const particles = require('@dschau/particles.js');
      const particlesConfig = require('../../particles.json');

      particles('header', particlesConfig);
    });
  }

  render() {
    const { subTitle, title } = this.props;
    return (
      <Container id="header">
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <Title style={{ margin: 0 }}>
            <GatsbyLink
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {title}
              <Subtitle>{subTitle}</Subtitle>
            </GatsbyLink>
          </Title>
        </div>
      </Container>
    );
  }
}

injectGlobal`
  .particles-js-canvas-el {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

