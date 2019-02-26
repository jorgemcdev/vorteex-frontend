/* eslint-disable react/prop-types */
import React from 'react';
import Graph from 'vis-react';
import PropTypes from 'prop-types';

// https://appendto.com/2017/05/creating-network-diagrams-vis-js/

// Graph Options
import options from './graphsOptions';

const Graphs = ({ nodes, edges }) => {
  const events = {
    select(event) {
      // Open Modal;
    },
    release(event) {
      const xPos = Math.round(event.pointer.canvas.x);
      const yPos = Math.round(event.pointer.canvas.y);
      // Update Store
    }
  };

  const nodesT = nodes.map(el => el);
  const edgesT = edges.map(el => el);

  return (
    <div id="mynetwork">
      <Graph
        graph={{ nodes: nodesT, edges: edgesT }}
        options={options}
        events={events}
      />
    </div>
  );
};

Graphs.propTypes = {
  nodes: PropTypes.array.isRequired,
  edges: PropTypes.array.isRequired,
};

export default Graphs;
