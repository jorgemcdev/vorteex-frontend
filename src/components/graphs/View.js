import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

import Graphs from './Graphs';
import GraphsModal from './GraphsModal';
import Alert from '../shared/alert/Alert';
import Loading from '../shared/loading/Loading';

class View extends Component {
  state = {
    isOpen: false
  }

  componentDidMount() {
    const { listItems } = this.props;
    listItems();
  }

  componentWillUnmount() {
    const { resetItems } = this.props;
    resetItems();
  }

  toogle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const {
      nodes, edges, isLoading, messages, delMessage, dropGraph
    } = this.props;

    const { isOpen } = this.state;

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
              <Graphs
                nodes={nodes}
                edges={edges}
                dropGraph={dropGraph}
                toogle={this.toogle}
              />
            )}

        </CardBody>

        <GraphsModal
          isOpen={isOpen}
          toogle={this.toogle}
          nodes={nodes}
        />

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
  dropGraph: PropTypes.func.isRequired,
  // Messages
  messages: PropTypes.array.isRequired,
  delMessage: PropTypes.func.isRequired,
};

export default View;
