const getTransitionStyles = ({ pathname, timeout }) => {
  const base = pathname
    .split('/')
    .slice(1)
    .shift();
  switch (base) {
    case '':
      return {
        entering: {
          opacity: 0
        },
        entered: {
          transition: `opacity 500ms ease-in-out`
        },
        exiting: {
          transition: `opacity ${timeout}ms ease-in-out`
        },
        exited: {
          opacity: 0
        }
      };
    case 'lessons':
      return {
        entering: {
          opacity: 0
        },
        entered: {
          header: {
            transition: `opacity 500ms ease-in-out`
          },
          content: {
            transition: `opacity 500ms ease-in-out`
          }
        },
        exiting: {
          transition: `opacity 500ms ease-in-out`
        },
        exited: {
          transition: `opacity 500ms ease-in-out`
        }
      };
    default:
      return {};
  }
};

export const getTransitionStyle = ({ pathname, status, timeout }) =>
  getTransitionStyles({ pathname, timeout })[status];
