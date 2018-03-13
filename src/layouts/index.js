import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { Header } from '../components';

import '../style';
import 'normalize.css';

const Container = styled.div``;

const Content = styled.main`
  margin: 0 auto;
  paddingTop: 0;
`;

export default ({ children, data }) => (
  <Container>
    <Helmet
      title="CSS in JS with styled-components and React"
      meta={[
        { name: 'description', content: 'CSS in JS Training by Dustin Schau' },
        { name: 'keywords', content: 'css in js, training, styled-components, glamorous, react' },
      ]}
    />
    <Header title="CSS in JS" subTitle="with styled-components and React" />
    <Content>
      {children()}
    </Content>
  </Container>
)

export const pageQuery = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
