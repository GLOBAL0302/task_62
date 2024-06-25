import {tickets} from '../../Constant';
import Ticket from './Ticket/Ticket';

const Pricing = () => {
  return (
    <div className="d-flex flex-wrap gap-2">
      {tickets.map(country=>(
        <Ticket
          key={country.country}
          country={country}/>
      ))}
    </div>
  );
};

export default Pricing;