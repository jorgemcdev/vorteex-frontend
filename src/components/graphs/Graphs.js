import React, { Component } from 'react';
import Graph from 'vis-react';
import './graphs.css';

// eslint-disable-next-line react/prefer-stateless-function
class Graphs extends Component {
  render() {
    const nodes = [{"id": 10001, "group": 0, "label": "CleanMX"},
                   {"id": 20001, "group": 1, "label": "CleanMX Reports"},
                   {"id": 10002, "group": 0, "label": "CleanMX"},
                   {"id": 20002, "group": 1, "label": "CleanMX Events"},
                   {"id": 10003, "group": 0, "label": "PhishTank"},
                   {"id": 20003, "group": 1, "label": "PhishTank Reports"},
                   {"id": 10004, "group": 0, "label": "PhishTank"},
                   {"id": 20004, "group": 1, "label": "PhishTank Events"},
                   {"id": 10005, "group": 0, "label": "Deduplicator"},
                   {"id": 20005, "group": 1, "label": "Deduplicated Events"},
                   {"id": 10006, "group": 0, "label": "MongoDB"},
                   {"id": 10007, "group": 0, "label": "ElasticSearch"}];

    const edges = [{"from": 20001, "to": 10001},
                   {"from": 20001, "to": 10002},
                   {"from": 20002, "to": 10002},
                   {"from": 20003, "to": 10003},
                   {"from": 20003, "to": 10004},
                   {"from": 20004, "to": 10004},
                   {"from": 20002, "to": 10005},
                   {"from": 20004, "to": 10005},
                   {"from": 20005, "to": 10005},
                   {"from": 20005, "to": 10006},
                   {"from": 20005, "to": 10007}];

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
