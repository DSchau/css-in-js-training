import React from 'react';
import styled, { css } from 'styled-components';

import { Unit } from './unit';

const Container = styled.div`
  background-color: #eee;
  padding: 1rem 0;
`;

const Title = styled.h2`
  color: #999;

  font-size: 18px;
  padding: 0.5rem 0;
  margin: 0.25rem 0;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Previous = styled(Unit)`
  ${props =>
    props.hasNext === false &&
    css`
      grid-column: 1;
    `};
`;

const Next = styled(Unit)`
  ${props =>
    props.hasPrev === false &&
    css`
      grid-column: 2;
    `};
`;

/*
 * TODO: flesh this out
 */
export function ReadMore({ prev = {}, next = {} }) {
  return (
    <Container>
      <Title>Continue reading</Title>
      <Grid>
        <Previous previous={true} hasNext={!!next} {...prev} />
        <Next next={true} hasPrev={!!prev} {...next} />
      </Grid>
    </Container>
  );
}
