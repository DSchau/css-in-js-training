import React from 'react';
import styled from 'styled-components';

import { Unit } from './unit';

const Container = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  margin: 1rem 0;
`;

/*
 * TODO: flesh this out
 */
export function ReadMore({ prev = {}, next = {} }) {
  const units = [prev, next];
  return (
    <Container>
      <Grid>
        <Unit previous={true} {...prev} />
        <Unit next={true} {...next} />
      </Grid>
    </Container>
  );
}
