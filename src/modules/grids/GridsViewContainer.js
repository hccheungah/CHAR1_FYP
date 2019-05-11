import { compose, withState } from 'recompose';

import GridView from './GridsView';

const listData = [
  {
    id: 1,
    brand: 'Shatin',
    title: 'QUIET APARTMENT',
    subtitle: 'Traffic is convenient',
    price: '$5000',
    badge: 'NEW',
    badgeColor: '#3cd39f',
    image:
      'https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg',
  },
  {
    id: 2,
    brand: 'Tsuen Kwan O',
    title: 'HIGH RISING BUILDING',
    subtitle: 'Perfect for family',
    price: '$7830',
    priceFrom: true,
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-26549.jpg',
  },
  {
    id: 3,
    brand: 'Central',
    title: 'SMALL APARTMENT',
    subtitle: 'Close to office',
    price: '$6500',
    priceFrom: true,
    badge: 'SALE',
    badgeColor: '#ee1f78',
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-30360.jpg',
  },
  {
    id: 4,
    brand: 'Mong Kok',
    title: 'OLD TOWN BUILDING',
    subtitle: 'With Hong Kong Culture',
    price: '$4300',
    badge: 'NEW',
    badgeColor: 'green',
    image: 'https://reactnativestarter.com/demo/images/pexels-photo-37839.jpg',
  },
];

export default compose(
  withState('tabIndex', 'setTabIndex', 0),
  withState('tabs', 'setTabs', ['Flats']),
  withState('data', 'setData', listData),
)(GridView);
