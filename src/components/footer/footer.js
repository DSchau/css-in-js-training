import React from 'react';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import CodeIcon from 'react-icons/lib/fa/code';
import GithubIcon from 'react-icons/lib/fa/github';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eb7f00;
`;

const Message = styled.p`
  color: #f2ffff;
  font-size: 14px;
  font-weight: 400;

  margin: 0;
  margin-right: auto;
  padding: 1rem 0.25rem;
  width: 100%;

  text-align: center;
`;

const Link = styled(GatsbyLink)`
  text-decoration: underline;
  text-decoration-skip: ink;

  font-weight: 700;

  color: inherit;
  
  :hover {
    color: inherit;
  }
`;

const Code = styled(CodeIcon)`
  color: #acf0f2;

  font-size: 18px;

  margin: 0 0.125rem;

  position: relative;
  top: -1px;
`;

const GithubLink = styled(GatsbyLink)`
  text-decoration: none;

  color: inherit;
`;

const Github = styled(GithubIcon)`
  font-size: 24px;

  color: white;
`;

export function Footer() {
  return (
    <Container>
      <Message>
        Made with <Code /> by <Link to="https://dustinschau.com" target="_blank" rel="noopener">Dustin Schau</Link>
      </Message>
      <GithubLink to="https://github.com" target="_blank" rel="noopener"><Github /></GithubLink>
    </Container>
  );
}
