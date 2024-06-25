import {Iticket} from '../../../types';
import React from 'react';

interface Props{
  country:Iticket
}
const Ticket:React.FC<Props> = ({country}) => {

  return (
    <div className="d-flex border border-5 p-3">
      <img
        style={{width:"250px"}}
        src={country.img} alt=""/>
      <div className="info">
        <h3>{country.country}</h3>
        <h3>${country.price}</h3>
      </div>
    </div>
  );
};

export default Ticket;