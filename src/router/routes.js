import { load, makeRoute } from './routerHelpers';

export default [
  {
    path: '/',
    component: {
      template: '<router-view></router-view>'
    },
    children: [
      {
        path: '',
        component: load('MainLayout'),
        children: [
          makeRoute('', 'Home'),
          makeRoute('card', 'Card'),
          makeRoute('author', 'Author'),
          makeRoute('*', 'NotFound'),
        ]
      },
    ],
  },
];
