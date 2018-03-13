import React from 'react';
import styled from 'styled-components';

import { Lesson } from '..';
import { MEDIA } from '../../style';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  padding: 1rem;

  ${MEDIA.greaterThan('medium')} {
    grid-template-columns: 50% 50%;
  }

  ${MEDIA.greaterThan('large')} {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
`;

export function Lessons({ list = [] }) {
  return (
    <Grid>
      {
        list.map(({ node }, index) => (
          <Lesson key={node.id} number={index + 1} {...node} />
        ))
      }
    </Grid>
  );
}
