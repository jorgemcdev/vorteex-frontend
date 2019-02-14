import React, { Component } from 'react';
import Graph from 'vis-react';
import axios from 'axios';

// Data Parser
import DataParser from './DataParser';

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
    const g = new DataParser();
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
      autoResize: true,
      layout: {
        hierarchical: false
      },
    };

    const events = {
      /*
      select(event) {
        var { nodes, edges } = event;
      }
      */
    };
    const show = <Graph graph={graph} options={options} events={events} />;

    return (
      <div id="mynetwork">
        {show}
      </div>
    );
  }
}

export default Graphs;
