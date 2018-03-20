import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #eee;
`;

const Title = styled.h2`
  margin: 0;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  list-style-type: none;
  margin: 0;
`;

const isEmpty = items =>
  !items || items.length === 0 || items.every(item => !item);

export function Group({ items, title }) {
  const allItems = [].concat(items);
  if (isEmpty(allItems)) {
    return null;
  }

  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {allItems.map(item => <ListItem key={item}>{item}</ListItem>)}
      </List>
    </Container>
  );
}
