import React from 'react';
import styled from 'styled-components';

import { Group } from './group';
import { MEDIA } from '../../style';

const Container = styled.div``;

export const StoryboardTitle = styled.h1`
  margin: 0;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  text-align: center;
  border-bottom: 4px solid #eee;
`;

const GroupContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;

  ${MEDIA.medium`
    grid-template-columns: 50% 50%;
  `};
`;

export function Storyboard({
  diagrams = [],
  examples = [],
  hook = '',
  takeaways = [],
  who = ''
}) {
  return (
    <Container>
      <StoryboardTitle>Storyboard</StoryboardTitle>
      <GroupContainer>
        <Group title="Hook" items={hook} />
        <Group title="Concrete Example(s)" items={examples} />
        <Group title="Diagrams" items={diagrams} />
        <Group title="Takeaways" items={takeaways} />
      </GroupContainer>
    </Container>
  );
}
