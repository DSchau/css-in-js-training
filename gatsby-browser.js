import React, { createElement } from 'react';
import Transition from 'react-transition-group/Transition';
import createHistory from 'history/createBrowserHistory';

import { getTransitionStyle } from './src/util/transition-style';

const TIMEOUT = 250;
const HISTORY_EXITING_EVENT_TYPE = 'history::exiting';

const getUserConfirmation = (pathname, callback) => {
  const event = new CustomEvent(HISTORY_EXITING_EVENT_TYPE, {
    detail: { pathname }
  });
  window.dispatchEvent(event);
  setTimeout(() => {
    callback(true);
  }, TIMEOUT);
};

const history = createHistory({ getUserConfirmation });

history.block((location, action) => location.pathname);

class ReplaceComponentRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exiting: false, nextPageResources: {} };

    this.listenerHandler = this.listenerHandler.bind(this);
  }

  listenerHandler(event) {
    const nextPageResources =
      this.props.loader.getResourcesForPathname(
        event.detail.pathname,
        nextPageResources => this.setState({ nextPageResources })
      ) || {};
    this.setState({ exiting: true, nextPageResources });
  }

  componentDidMount() {
    window.addEventListener(HISTORY_EXITING_EVENT_TYPE, this.listenerHandler);
  }

  componentWillUnmount() {
    window.removeEventListener(
      HISTORY_EXITING_EVENT_TYPE,
      this.listenerHandler
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.setState({ exiting: false, nextPageResources: {} });
    }
  }

  render() {
    const transitionProps = {
      timeout: {
        enter: 0,
        exit: TIMEOUT
      },
      appear: true,
      in: !this.state.exiting,
      key: this.props.location.key
    };
    return (
      <Transition {...transitionProps}>
        {status =>
          createElement(this.props.pageResources.component, {
            ...this.props,
            ...this.props.pageResources.json,
            transition: {
              status,
              timeout: TIMEOUT,
              style: getTransitionStyle({
                pathname: this.props.location.pathname,
                status,
                timeout: TIMEOUT
              }),
              nextPageResources: this.state.nextPageResources
            }
          })
        }
      </Transition>
    );
  }
}

exports.replaceHistory = () => history;
exports.replaceComponentRenderer = ({ props, loader }) => {
  if (props.layout) {
    return undefined;
  }
  return createElement(ReplaceComponentRenderer, { ...props, loader });
};
