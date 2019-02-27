const options = {
  autoResize: true,
  physics: false,
  // NODES
  nodes: {
    shape: 'dot',
    size: 24,
    font: {
      size: 18
    },
    shadow: false
  },
  // EDGES
  edges: {
    width: 1,
    shadow: false,
    color: '#999'
  },
  // GROUPS COLORS
  groups: {
    useDefaultGroups: false,
    Rooms: {
      color: {
        background: 'rgba(80,80,80)',
        border: 'white',
        highlight: {
          background: 'rgba(80,80,80)',
          border: 'yellow'
        }
      },
      shadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.2)'
      }
    },
    Collectors: {
      color: {
        background: 'rgb(214, 39, 40)',
        border: 'white',
        highlight: {
          background: 'rgb(214, 39, 40)',
          border: 'yellow'
        }
      },
      shadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.2)'
      }
    },
    Parsers: {
      color: {
        background: 'rgb(255,127,14)',
        border: 'white',
        highlight: {
          background: 'rgb(255,127,14)',
          border: 'yellow'
        }
      },
      shadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.2)'
      }
    },
    Experts: {
      color: {
        background: 'rgb(44, 200, 44)',
        border: 'white',
        highlight: {
          background: 'rgb(44, 200, 44)',
          border: 'yellow'
        }
      },
      shadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.2)'
      }
    },
    Outputs: {
      color: {
        background: 'rgb(40, 39, 214)',
        border: 'white',
        highlight: {
          background: 'rgb(40, 39, 214)',
          border: 'yellow'
        }
      },
      shadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.2)'
      }
    }
  }
};

export default options;
