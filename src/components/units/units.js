import React from 'react';
import styled from 'styled-components';
import graphPaper from '!!url-loader!./images/graph-paper.svg';

import { Unit } from '..';
import { MEDIA } from '../../style';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #225378;
  background-image: url(${graphPaper});
  padding: 1rem;
`;

const Title = styled.h2`
  display: inline-block;
  color: white;
  text-align: center;
  margin: 0.5rem auto;
  padding: 0.5rem;
  font-size: 32px;

  border: 2px solid rgba(255, 255, 255, 0.75);
  border-left-width: 0;
  border-right-width: 0;
`;

const Caps = styled.span`
  text-transform: uppercase;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;

  ${MEDIA.medium`
    grid-template-columns: 50% 50%;
  `} ${MEDIA.large`
    grid-template-columns: 33.33% 33.33% 33.33%;
  `};
`;

export function Units({ list = [] }) {
  return (
    <Container>
      <Title>2 hours &#9679; {list.length} videos</Title>
      <Grid>
        {list.map(({ node }, index) => (
          <Unit key={node.id} number={index + 1} {...node} />
        ))}
      </Grid>
    </Container>
  );
}
