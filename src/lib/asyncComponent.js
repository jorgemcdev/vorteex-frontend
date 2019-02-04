import React, { Component } from 'react';

import Loading from '../components/shared/loading/Loading';

const asyncComponent = getComponent => (
  class AsyncComponent extends Component {
    state = { component: null };

    componentDidMount() {
      const { component } = this.state;
      if (!component) {
        getComponent()
          .then((result) => {
            this.setState({ component: result.default });
          });
      }
    }

    render() {
      const { component } = this.state;
      const C = component;
      return C ? <C {...this.props} /> : <Loading />;
    }
  }
);

export default asyncComponent;
