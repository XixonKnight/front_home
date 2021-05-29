import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Customer',
    icon: 'person-outline',
    link: '/pages/customer',
  },
  {
    title: 'City',
    icon: 'layers-outline',
    link: '/pages/city',
  },
  {
    title: 'Products',
    icon: 'shopping-bag-outline',
    link: '/pages/products',
  },
  {
    title: 'Store',
    icon: 'shopping-cart-outline',
    link: '/pages/store',
  },

  // {
  //   title: 'Options',
  //   icon: 'cube-outline',
  //   children: [
  //     {
  //       title: 'Size',
  //       icon: 'activity-outline',
  //       link: '/pages/options/size',
  //     },
  //     {
  //       title: 'Ice',
  //       icon: 'droplet-outline',
  //       link: '/pages/options/ice',
  //     },
  //     {
  //       title: 'Topping',
  //       icon: 'grid-outline',
  //       link: '/pages/options/topping',
  //     },
  //   ],
  // },
  {
    title: 'FEATURES',
    group: true,
  },
];
