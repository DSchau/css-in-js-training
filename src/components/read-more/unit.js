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
  outline: 2px solid ${props => props.backgroundColor};
  height: 32px;
  justify-content: center;
  position: relative;
  margin: 0.5rem;
  transition: 175ms ease-in-out;

  :hover {
    color: ${props => props.backgroundColor};
    background-color: white;
    outline-width: 2px;
    .icon {
      background-color: ${props => props.backgroundColor};
      color: white;
    }
  }

  .icon {
    color: ${props => props.backgroundColor};
    background-color: white;
  }
`;

const PrevIcon = styled(ChevronLeft)`
  position: absolute;
  left: 0;
  font-size: 32px;

  transition: 175ms ease-in-out;
`;

const NextIcon = styled(PrevIcon.withComponent(ChevronRight))`
  left: auto;
  right: 0;
`;

export function Unit({ id, fields, frontmatter, next, previous, ...rest }) {
  if (!id) {
    return null;
  }

  const { description, title } = frontmatter;
  const color = {
    base: getColorFromString(title)
  };
  return (
    <Link to={`/${fields.slug}`} backgroundColor={color.base} {...rest}>
      {previous && <PrevIcon className="icon" backgroundColor="white" />}
      {title}
      {next && <NextIcon className="icon" backgroundColor="white" />}
    </Link>
  );
}
