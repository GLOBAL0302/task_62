import {Iticket} from '../../types';

interface Props{
  items:Iticket[];
}

const countPrice = (value:Iticket[])=>{
  let countryTotal = value.reduce((acc, item)=>{
    return acc + item.price;
  },0)
  return countryTotal;
}

const CheckOut:React.FC<Props> = ({items}) => {
  let total = items.reduce((acc, item)=>{
    return acc + item.price;
  }, 0);

  let london = items.filter(item => item.country === "London");
  let roma = items.filter(item => item.country === "Rome");
  let europe = items.filter(item => item.country === "Europe");


  console.log();
  return (
    <div className="bg-light p-4 rounded">
      <p>{london.length > 0?`Ticket to London x${london.length}= $${countPrice(london)}`: ""}</p>
      <p>{roma.length > 0?`Ticket to Roma x${roma.length}= $${countPrice(roma)}`: ""}</p>
      <p>{europe.length > 0?`Ticket to Europe x${europe.length}= $${countPrice(europe)}`: ""}</p>
      <h3>{total?`your total expanses is $${total}`:"You have not booked the ticket"}</h3>
    </div>
  );
};

export default CheckOut;