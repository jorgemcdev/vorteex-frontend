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
        border: 'black',
        highlight: {
          background: 'white',
          border: 'rgba(31,119,180)'
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
        border: 'black',
        highlight: {
          background: 'white',
          border: 'rgb(214, 39, 40)'
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
        border: 'black',
        highlight: {
          background: 'white',
          border: 'rgb(255,127,14)'
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
        border: 'black',
        highlight: {
          background: 'white',
          border: 'rgb(44, 200, 44)'
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
        border: 'black',
        highlight: {
          background: 'white',
          border: 'rgb(40, 39, 214)'
        }
      },
      shadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.2)'
      }
    },
    // 5: {
    //   color: {
    //     background: 'rgb(148, 103, 189)',
    //     border: 'white',
    //     highlight: {
    //       background: 'white',
    //       border: ' rgb(148, 103, 189)'
    //     }
    //   },
    //   shadow: {
    //     enabled: false,
    //     color: 'rgba(0,0,0,0.5)'
    //   }
    // },
    // 6: {
    //   color: {
    //     background: 'rgb(140, 86, 75)',
    //     border: 'white',
    //     highlight: {
    //       background: 'white',
    //       border: 'rgb(140, 86, 75)'
    //     }
    //   },
    //   shadow: {
    //     enabled: false,
    //     color: 'rgba(0,0,0,0.5)'
    //   }
    // },
    // 7: {
    //   color: {
    //     background: 'rgb(23, 190, 207)',
    //     border: 'white',
    //     highlight: {
    //       background: 'white',
    //       border: 'rgb(23, 190, 207)'
    //     }
    //   },
    //   shadow: {
    //     enabled: false,
    //     color: 'rgba(0,0,0,0.5)'
    //   }
    // },
    // 8: {
    //   color: {
    //     background: 'rgb(44, 160, 44)',
    //     border: 'white',
    //     highlight: {
    //       background: 'white',
    //       border: 'rgb(44, 160, 44)'
    //     }
    //   },
    //   shadow: {
    //     enabled: false,
    //     color: 'rgba(0,0,0,0.5)'
    //   }
    // }
  }
};

export default options;
