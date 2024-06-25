import {Iticket} from './types';
import rome from './img/romeTicket.svg';
import london from './img/londonTicket.svg'
import europe from './img/europeTicket.svg'

export const tickets: Iticket[] = [
  {
    country: 'Rome',
    img: rome,
    price: 200
  },
  {
    country: 'London',
    img: london,
    price: 100
  },

  {
    country: 'Europe',
    img: europe,
    price: 500
  },

];