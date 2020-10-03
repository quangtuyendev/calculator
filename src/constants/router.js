import Calculator from '../components/Calculator';
import MentalArithmetic from '../components/MentalArithmetic';
import Welcome from '../components/Welcome';

export const routers = [
  {
    path: '/tinh-toan',
    component: Calculator,
    exact: true,
  },
  {
    path: '/tro-choi-tinh-nham',
    component: MentalArithmetic,
    exact: true,
  },
  {
    path: '/',
    component: Welcome,
  },
];
