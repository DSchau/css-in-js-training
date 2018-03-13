import { keyframes } from 'styled-components';

export const WIGGLE_AND_SCALE = keyframes`
  0% {
    transform: rotate(4deg) scale(1);
  }
  25% {
    transform: rotate(-2deg) scale(1.025);
  }
  50% {
    transform: rotate(4deg) scale(1.05);
  }
  75% {
    transform: rotate(-2deg) scale(1.025);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
`;
