import React from 'react';
import PropTypes from 'prop-types';
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

const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet
      title="CSS in JS Training"
      meta={[
        { name: 'description', content: 'CSS in JS Training by Dustin Schau' },
        { name: 'keywords', content: 'css in js, training, styled-components, glamorous, react' },
      ]}
    />
    <Header />
    <Content>
      {children()}
    </Content>
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
