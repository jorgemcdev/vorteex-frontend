import React from 'react';
import Graph from 'vis-react';
import PropTypes from 'prop-types';

// Graph Options
import options from './graphsOptions';

const Graphs = ({
  nodes, edges, dropGraph, toogle
}) => {
  const events = {
    dragEnd(event) {
      const node = event.nodes[0];
      const { nodeId, group } = nodes.filter(el => el.id === node)[0];
      const xPos = Math.round(event.pointer.canvas.x);
      const yPos = Math.round(event.pointer.canvas.y);
      // Update Store
      dropGraph({
        id: node, nodeId, group, x: xPos, y: yPos
      });
    },
    doubleClick(event) {
      const node = event.nodes[0];
      if (node) {
        toogle(node);
      }
    }
  };

  return (
    <div id="mynetwork">
      <Graph
        graph={{ nodes, edges }}
        options={options}
        events={events}
      />
    </div>
  );
};

Graphs.propTypes = {
  nodes: PropTypes.array.isRequired,
  edges: PropTypes.array.isRequired,
  dropGraph: PropTypes.func.isRequired,
  toogle: PropTypes.func.isRequired
};

export default Graphs;
