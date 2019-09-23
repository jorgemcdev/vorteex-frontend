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
      name: '',
      wrapper: {
        element: '',
        attributes: {}
      },
      class: ''// naming ex: { className: "my-class",style: { fontFamily: "Verdana" }, id: "my-id"}
    },
    {
      name: 'Instances',
      url: '/instances',
      icon: 'icon-ban',
    },
    {
      name: 'Templates',
      url: '/templates',
      icon: 'icon-puzzle',
    },
    {
      name: 'Templates Groups',
      url: '/templates-groups',
      icon: 'icon-puzzle',
    },
    {
      name: 'Modules',
      url: '/modules',
      icon: 'icon-drop',
    },
    {
      name: 'Rooms',
      url: '/rooms',
      icon: 'icon-cursor',
    },
  ]
};
