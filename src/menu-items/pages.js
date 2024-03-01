// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Projects',
  caption: 'Projects Estimation',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Toyota',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login3',
          title: 'Estimation 1',
          type: 'collapse',
          
          children: [
            {
              id: 'v1',
              title: 'Version 1',
              type: 'item',
              url: '/v1',
              
            }
          ]
        }
        ,
        {
          id: 'register3',
          title: 'Estimation 2',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
      ]
    },
    {
      id: 'envu',
      title: 'Envu',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login3',
          title: 'Estimation 1',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'register3',
          title: 'Estimation 2',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
      ]
    }
  ]
};

export default pages;
