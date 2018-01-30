import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column'
});

const IndexPage = () => (
  <div>
    <h1>Hello! Not much to see here yet, but stay tuned&hellip;</h1>
    <Link to="/proposal/">Proposal</Link>
  </div>
)

export default IndexPage
