import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

import Header from '../components/Header';

import '../style';
import 'normalize.css';

const Container = styled.div({
});

const Content = styled.main({
  margin: '0 auto',
  maxWidth: 960,
  padding: '0px 1.0875rem 1.45rem',
  paddingTop: 0,
});

export default ({ children, data }) => (
  <Container>
    <Helmet
      title="CSS in JS with styled-components and React"
      meta={[
        { name: 'description', content: 'CSS in JS Training by Dustin Schau' },
        { name: 'keywords', content: 'css in js, training, styled-components, glamorous, react' },
      ]}
    />
    <Header title={data.site.siteMetadata.title} />
    <Content>
      {children()}
    </Content>
  </Container>
)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
