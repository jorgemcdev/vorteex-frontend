const options = {
  autoResize: true,
  physics: false,
  interaction: {
    dragView: false,
    hover: true,
    tooltipDelay: 1
  },
  nodes: {
    shape: 'dot',
    size: 24,
    borderWidth: 2,
    font: {
      size: 14,
      color: '#333',
      background: 'rgba(255,255,255,0.3)',
      multi: true
    },
    color: {
      border: 'white',
      highlight: {
        background: '#D2E5FF',
        border: '#2B7CE9'
      },
    },
    shadow: {
      enabled: false,
    },
  },
  edges: {
    width: 2,
    shadow: {
      enabled: false,
    },
    color: '#aaa',
    arrows: {
      from: {
        enabled: false,
      },
      to: {
        enabled: true,
        scaleFactor: 0.4,
      }
    },
    arrowStrikethrough: false,
    smooth: {
      enabled: true,
      type: 'cubicBezier',
      forceDirection: 'horizontal',
      roundness: 0.6
    }
  },
  groups: {
    useDefaultGroups: false,
    Rooms: {
      color: {
        background: 'rgba(80,80,80)',
      },
    },
    Collectors: {
      color: {
        background: 'rgb(214, 39, 40)',
      },
    },
    Parsers: {
      color: {
        background: 'rgb(255,127,14)',
      },
    },
    Experts: {
      color: {
        background: 'rgb(44, 200, 44)',
      },
    },
    Outputs: {
      color: {
        background: 'rgb(60, 120, 216)',
      },
    }
  }
};

export default options;
