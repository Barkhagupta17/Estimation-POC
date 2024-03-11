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
      id: 'applications',
      title: 'Toyota',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'estimation1',
          title: 'Toyota programs estimation',
          type: 'item',
          url : '/estimation'    
        
        }
        ,
        {
          id: 'estimation2',
          title: 'Toyota reports estimation',
          type: 'item',
          url: '/sample-page',
          // target: true
        }
        ,
        {
          id: 'estimation3',
          title: 'Toyota recognitions estimation',
          type: 'item',
          url: '/sample-page',
          // target: true
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
          url: 'login',
          // target: true
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
