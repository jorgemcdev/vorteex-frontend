/* eslint-disable no-multi-spaces */
export default {
  items: [
    {
      name: 'Dashboard',
      url: '/',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: 'Graph Designer',
      wrapper: {
        element: '',
        attributes: {}
      },
      class: ''// naming ex: { className: "my-class",style: { fontFamily: "Verdana" }, id: "my-id"}
    },
    {
      name: 'Bots',
      url: '/bots',
      icon: 'icon-ban',
    },
    {
      name: 'Rooms',
      url: '/rooms',
      icon: 'icon-puzzle',
    },
    {
      name: 'Graphs',
      url: '/graphs',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Templates',
      url: '/templates',
      icon: 'icon-drop',
    },
    {
      name: 'Rooms Association',
      url: '/rooms-association',
      icon: 'icon-cursor',
    },
  ]
};
