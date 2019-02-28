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

    const title = `
      <div style="text-align: center"><b>CleanMx Reports</b></div>
      <table cellspacing="2" cellpadding="2" border="1">
        <tr>
          <td><b>Code Name:</b></td>
          <td>cleanmx-collector</td>
        </tr>
        <tr>
          <td><b>Description:</b>
          <td>CleanMX Collector</td>
        <tr>
          <td><b>Group:</b></td>
          <td>Collectors</td>
        <tr>
        <tr>
          <td><b>Template:</b>
          <td>CleanMX Collector</td>
        </tr>
      </table>
      <div>Parameters</div>
      <table cellspacing="2" cellpadding="2" border="1" width="100%">
        <tr>
          <td><b>Key</b></td>
          <td><b>Value</b></td>
        </tr>
        <tr>
          <td>AA</td>
          <td>123</td>
        </tr>
      </table>
    `;

    const nodeTooltip = nodes.map((el) => {
      return (
        { ...el, ...{ title } }
      );
    });
 
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
                nodes={nodeTooltip}
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
