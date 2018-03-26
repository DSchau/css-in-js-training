import React from 'react';
import styled from 'styled-components';
import FacebookIcon from 'react-icons/lib/fa/facebook-square';
import TwitterIcon from 'react-icons/lib/fa/twitter-square';

import { ShareIcon } from './share-icon';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 1rem 0;
`;

const ShareContainer = styled.div`
  display: flex;
`;

const Title = styled.h3`
  color: #999;

  font-size: 18px;
  padding: 0.5rem 0;
  margin: 0.25rem 0;
`;

const Facebook = styled(FacebookIcon)`
  font-size: 32px;

  color: #3b5998;
`;

const Twitter = styled(TwitterIcon)`
  font-size: 32px;

  color: #1da1f2;
`;

export function Share({ permalink, title }) {
  return (
    <Container>
      <Title>Share this article</Title>
      <ShareContainer>
        <ShareIcon
          icon={Facebook}
          href={`https://www.facebook.com/sharer/sharer.php?u=${permalink}`}
        />
        <ShareIcon
          icon={Twitter}
          href={`https://www.twitter.com/intent/tweet?url=&text=Check out "${title}" from @schaudustin: ${permalink}`}
        />
      </ShareContainer>
    </Container>
  );
}
