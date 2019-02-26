import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

import Graphs from './Graphs';
import Alert from '../shared/alert/Alert';
import Loading from '../shared/loading/Loading';

class View extends Component {
  componentDidMount() {
    const { listItems } = this.props;
    listItems();
  }

  componentWillUnmount() {
    const { resetItems } = this.props;
    resetItems();
  }

  render() {
    const {
      nodes, edges, isLoading, messages, delMessage
    } = this.props;

    return (
      <Card>
        <CardBody>

          {messages.map(message => (
            <Alert
              key={message.id}
              type={message.type}
              title={message.title}
              text={message.text}
              onDismiss={() => delMessage(message.id)}
            />
          ))}

          {isLoading
            ? <Loading />
            : (
              <Graphs nodes={nodes} edges={edges} />
            )}

        </CardBody>
      </Card>
    );
  }
}

View.propTypes = {
  // Graphs
  nodes: PropTypes.array.isRequired,
  edges: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  listItems: PropTypes.func.isRequired,
  resetItems: PropTypes.func.isRequired,
  // Messages
  messages: PropTypes.array.isRequired,
  delMessage: PropTypes.func.isRequired,
};

export default View;
