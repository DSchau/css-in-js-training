const breakpoints = {
  xsmall: 0,
  small: 480,
  medium: 768,
  large: 1024,
};

export const MEDIA = {
  greaterThan(property) {
    if (!breakpoints.hasOwnProperty(property)) {
      throw new Error(`The property ${property} is not a valid breakpoint`);
    }
    return `@media only screen and (min-width: ${breakpoints[property]}px)`;
  },
};
