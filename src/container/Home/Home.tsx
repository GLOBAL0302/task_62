import Navbar from '../../components/Navbar/Navbar';
import Content from '../../components/Content/Content';
import Pricing from '../../components/Pricing/Pricing';
import {useState} from 'react';
import {Iticket} from '../../types';
import {Route, Routes} from 'react-router-dom';
import CheckOut from '../../components/CheckOut/CheckOut';

const Home = () => {
  const [allTickets, setAllTickets] = useState<Iticket[]>([])
  const addTickets = (value:Iticket) =>{
    setAllTickets((prevState)=>[
      ...prevState,
      value
    ])
  }
  return (
    <>
      <Navbar/>
      <Routes>
        <Route
          path={"/"}
          element={<Content/>}
        />
        <Route
          path={"pricing"}
          element={<Pricing addTickets={addTickets}/>}
        />
        <Route
          path={"CheckOut"}
          element={<CheckOut items={allTickets}/>}
        />
      </Routes>

    </>
  );
};

export default Home;