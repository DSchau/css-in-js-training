import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { Footer, Header } from '../components';

import '../style/global';
import 'normalize.css';

const Container = styled.div``;

const Content = styled.main`
  margin: 0 auto;
  padding-top: 0;
`;

const isIndex = location => location.pathname === '/';

export default ({ children, data: { about, meta, site }, location }) => (
  <Container>
    <Helmet
      title={meta.title}
      meta={[
        {
          name: 'description',
          content: meta.description
        },
        {
          name: 'keywords',
          content: meta.keywords.join(',')
        },
        {
          name: 'og:type',
          content: 'website'
        },
        {
          name: 'og:url',
          content: site.siteMetadata.domain
        },
        {
          name: 'og:site_name',
          content: meta.title
        },
        {
          name: 'og:title',
          content: meta.title
        },
        {
          name: 'og:description',
          content: meta.description
        },
        {
          name: 'og:locale',
          content: 'en_US'
        },
        {
          name: 'twitter:site',
          content: `@${about.frontmatter.twitter}`
        },
        {
          name: 'twitter:creator',
          content: `@${about.frontmatter.twitter}`
        },
        {
          name: 'twitter:url',
          content: site.siteMetadata.domain
        },
        {
          name: 'twitter:title',
          content: meta.title
        },
        {
          name: 'twitter:description',
          content: meta.description
        },
        {
          name: 'subject',
          content: meta.subject
        },
        {
          name: 'robots',
          content: 'index,follow'
        }
      ]}
    />
    {isIndex(location) && (
      <Header title="CSS in JS" subTitle="with styled-components and React" />
    )}
    <Content>{children()}</Content>
    <Footer />
  </Container>
);

export const pageQuery = graphql`
  query IndexLayoutQuery {
    meta: contentYaml {
      description
      keywords
      subject
      title
    }

    site {
      siteMetadata {
        domain
      }
    }

    about: markdownRemark(fileAbsolutePath: { regex: "/content/bio.md/" }) {
      frontmatter {
        twitter
      }
    }
  }
`;
