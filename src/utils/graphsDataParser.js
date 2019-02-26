class DataParser {
  constructor() {
    this.nodes = [];
    this.edges = [];
    this.ids = [];
    this.ROOM_ID_INDEX = 1000;
    this.INSTANCE_ID_INDEX = 2000;
  }

  addEdge(item1, item2, isSource) {
    let from;
    let to;
    if (isSource) {
      from = item1.id + this.ROOM_ID_INDEX;
      to = item2.id + this.INSTANCE_ID_INDEX;
    } else {
      to = item1.id + this.ROOM_ID_INDEX;
      from = item2.id + this.INSTANCE_ID_INDEX;
    }
    this.edges = [...this.edges, { from, to }];
  }

  addNode(item, isRoom) {
    const { name } = item;
    let index;
    let group;
    if (isRoom) {
      index = item.id + this.ROOM_ID_INDEX;
      group = "Rooms";
    } else {
      index = item.id + this.INSTANCE_ID_INDEX;
      group = item.group;
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
      // INSTANCE NODE
      this.addNode(item, false);

      // SOURCE ROOM NODE & EDGE
      item.source_rooms.forEach((room) => {
        this.addNode(room, true);
        this.addEdge(room, item, true);
      });

      // DESTINATION ROOM NODE & EDGE
      if (item.destination_rooms) {
        const room = item.destination_rooms;
        this.addNode(room, true);
        this.addEdge(room, item, false);
      }
    });
    return ({ nodes: this.nodes, edges: this.edges });
  }
}

export default DataParser;
