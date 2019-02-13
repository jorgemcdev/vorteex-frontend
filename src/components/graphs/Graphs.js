import React, { Component } from 'react';
import Graph from 'vis-react';
import axios from 'axios';

// Data Parser
import graphsDataParser from './graphsDataParser';

// Graph Style
import './graphs.css';

class Graphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      edges: []
    };
  }

  async componentDidMount() {
    const { data } = await axios({
      method: 'get',
      url: 'http://vorteex.ovnisec.com:9000/instances/',
      headers: { 'Content-Type': 'application/json' },
      timeout: 5000
    });
    const g = new graphsDataParser();
    const result = await g.parseData(data);
    this.setState({
      nodes: result.nodes,
      edges: result.edges
    });
  }

  render() {
    const { nodes, edges } = this.state;

    const graph = { nodes, edges };

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
        minVelocity: 0
      }
    };

    const events = {
      /*
      select(event) {
        var { nodes, edges } = event;
      }
      */
    };

    return (
      <div id="mynetwork">
        <Graph graph={graph} options={options} events={events} />
      </div>
    );
  }
}

export default Graphs;
