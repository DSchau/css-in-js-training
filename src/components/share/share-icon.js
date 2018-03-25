import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  display: flex;
  align-items: center;

  color: inherit;
  text-decoration: none;

  margin-right: 1rem;
`;

export function ShareIcon({ href, icon: Icon }) {
  return (
    <Link href={href} rel="noopener" target="_blank">
      <Icon />
    </Link>
  );
}
