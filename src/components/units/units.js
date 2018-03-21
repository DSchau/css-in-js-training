import React from 'react';
import styled from 'styled-components';

import { Unit } from '..';
import { MEDIA } from '../../style';

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
    <Grid>
      {list.map(({ node }, index) => (
        <Unit key={node.id} number={index + 1} {...node} />
      ))}
    </Grid>
  );
}
