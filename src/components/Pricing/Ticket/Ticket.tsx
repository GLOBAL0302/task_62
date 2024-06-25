import {Iticket} from '../../../types';
import React from 'react';
import {c} from 'vite/dist/node/types.d-aGj9QkWt';

interface Props{
  country:Iticket
  addTickets:(value:Iticket)=>void
}
const Ticket:React.FC<Props> = ({country, addTickets}) => {

  return (
    <div className="d-flex border border-5 p-3">
      <img
        style={{width:"250px"}}
        src={country.img} alt=""/>
      <div className="info">
        <h3>{country.country}</h3>
        <h3>${country.price}</h3>
        <button className="rounded" onClick={()=>addTickets(country)}>+</button>
      </div>
    </div>
  );
};

export default Ticket;