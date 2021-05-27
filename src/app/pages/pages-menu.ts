import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Users',
    icon: 'person-outline',
    link: '/pages/users',
  },
  {
    title: 'Products',
    icon: 'layers-outline',
    link: '/pages/products',
  },
  {
    title: 'Category',
    icon: 'keypad-outline',
    link: '/pages/category',
  },
  {
    title: 'Options',
    icon: 'cube-outline',
    children: [
      {
        title: 'Size',
        icon: 'activity-outline',
        link: '/pages/options/size',
      },
      {
        title: 'Ice',
        icon: 'droplet-outline',
        link: '/pages/options/ice',
      },
      {
        title: 'Topping',
        icon: 'grid-outline',
        link: '/pages/options/topping',
      },
    ],
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
  },
  {
    title: 'Maps',
    icon: 'map-outline',
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
  },
  {
    title: 'Editors',
    icon: 'text-outline',
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
  },
];
