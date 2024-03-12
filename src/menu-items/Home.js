// assets
import { IconHome } from '@tabler/icons-react';

// constant
const icons = { IconHome };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const home = {
  id: 'home',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Home',
      type: 'item',
      url: '/',
      icon: icons.IconHome,
      breadcrumbs: false
    }
  ]
};

export default home;
