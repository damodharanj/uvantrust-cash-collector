import { OrderComponent } from './order/order.component';

export const info = [
  {path: 'order', meta: ['id', 'quantity', 'amount', 'status']},
  {path: 'payment', meta: ['id', 'otp', 'payment generated']},
  {path: 'store', meta: ['id', 'name', 'mobile']},
  {path: 'delivery', meta: ['id', 'otp', 'delivery generated']},
  {path: 'item', meta: ['name', 'price']},
];
