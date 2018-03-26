import React from 'react';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import ChevronLeft from 'react-icons/lib/md/chevron-left';
import ChevronRight from 'react-icons/lib/md/chevron-right';

import { getColorFromString } from '../../style';

const Link = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  color: white;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  background-color: ${props => props.backgroundColor};

  :hover {
    color: white;
  }
`;

const PrevIcon = styled(ChevronLeft)`
  font-size: 32px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};

  :hover {
    background-color: ${props => props.color};
    color: ${props => props.backgroundColor};
  }
`;

const NextIcon = PrevIcon.withComponent(ChevronRight);

export function Unit({ id, fields, frontmatter, next, previous }) {
  if (!id) {
    return null;
  }

  const { description, title } = frontmatter;
  const color = {
    base: getColorFromString(title)
  };
  return (
    <Link to={`/${fields.slug}`} backgroundColor={color.base}>
      {previous && <PrevIcon color={color.base} backgroundColor="white" />}
      {title}
      {next && <NextIcon color={color.base} backgroundColor="white" />}
    </Link>
  );
}
