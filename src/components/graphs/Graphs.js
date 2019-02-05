import React, { Component } from 'react';
import Graph from 'vis-react';
import './graphs.css';

// eslint-disable-next-line react/prefer-stateless-function
class Graphs extends Component {
  render() {
    const nodes = [
      { id: 0, label: '0', group: 0 },
      { id: 1, label: '1', group: 0 },
      { id: 2, label: '2', group: 0 },
      { id: 3, label: '3', group: 1 },
      { id: 4, label: '4', group: 1 },
    ];
    const edges = [
      { from: 1, to: 0, shadow: { color: 'rgb(0,255,0)' }},
      { from: 2, to: 0 },
      { from: 4, to: 3 },
      { from: 5, to: 4 },
      { from: 4, to: 0 }
    ];

    const graph = {
      nodes,
      edges
    };

    const options = {
      layout: {
        hierarchical: false
      },
      nodes: {
        shape: 'dot',
        size: 30,
        font: {
          size: 32
        },
        borderWidth: 2,
        shadow: true
      },
      edges: {
        width: 2,
        shadow: true
      },
      physics: {
        enabled: false,
        minVelocity: 0.75
      }
    };

    const events = {
      select(event) {
        // var { nodes, edges } = event;
        console.log('Nodes:', event);
      }
    };

    return (
      <div>
        <div id="mynetwork">
          <Graph graph={graph} options={options} events={events} />
        </div>
      </div>
    );
  }
}

export default Graphs;
