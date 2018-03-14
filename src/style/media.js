import { css } from 'styled-components';

const breakpoints = {
  xsmall: 0,
  small: 480,
  medium: 768,
  large: 1024
};

export const MEDIA = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
