import React from 'react';
import styled from 'styled-components';

import { Lesson } from '..';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
`;

export function Lessons({ list = [] }) {
  return (
    <Grid>
      {
        list.map(({ node }) => (
          <Lesson key={node.id} {...node} />
        ))
      }
    </Grid>
  );
}
