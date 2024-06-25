import {tickets} from '../../Constant';
import Ticket from './Ticket/Ticket';
import React from 'react';
import {Iticket} from '../../types';

interface Props{
  addTickets:(value:Iticket)=>void;
}

const Pricing:React.FC<Props> = ({addTickets}) => {
  return (
    <div className="d-flex flex-wrap gap-2 justify-content-evenly">
      {tickets.map(country=>(
        <Ticket
          key={country.country}
          country={country}
          addTickets={addTickets}
        />
      ))}
    </div>
  );
};

export default Pricing;