class BotsDataParser {
  constructor() {
    this.nodes = [];
    this.edges = [];
    this.ids = [];
    this.ROOM_ID_INDEX = 1000;
    this.INSTANCE_ID_INDEX = 2000;
  }

  addEdge(item1, item2) {
    const from = item1.id + this.ROOM_ID_INDEX;
    const to = item2.id + this.INSTANCE_ID_INDEX;
    this.edges = [...this.edges, { from, to }];
  }

  addNode(item, isRoom) {
    const { name } = item;
    let index;
    let group;
    if (isRoom) {
      index = item.id + this.ROOM_ID_INDEX;
      group = 0;
    } else {
      index = item.id + this.INSTANCE_ID_INDEX;
      group = 1;
    }

    if (this.ids.indexOf(index) !== -1) {
      return;
    }

    this.nodes = [
      ...this.nodes,
      {
        id: index,
        label: name,
        group,
      }
    ];

    this.ids.push(index);
  }

  getNodes() {
    return this.nodes;
  }

  getEdges() {
    return this.edges;
  }

  parseData(data) {
    data.forEach((item) => {
      // BOT Node
      this.addNode(item, false);

      // SOURCE ROOM NODE & EDGE
      item.source_rooms.forEach((room) => {
        this.addNode(room, true);
        this.addEdge(room, item);
      });

      // DESTINATION ROOM NODE & EDGE
      if (item.destination_rooms) {
        const room = item.destination_rooms;
        this.addNode(room, true);
        this.addEdge(room, item);
      }
    });
    return ({ nodes: this.nodes, edges: this.edges });
  }
}

export default BotsDataParser;

/*
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./testData.json', 'utf8'));
const g = new BotsDataParser();
const result = g.parseData(data);
console.log(result);
*/
