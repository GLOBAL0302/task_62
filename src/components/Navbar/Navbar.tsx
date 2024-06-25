import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex">
          <NavLink
            to="/"
            className="navbar-brand" href="#">Home</NavLink>
          <div className="ms-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active" aria-current="page" href="#">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pricing" className="nav-link active" aria-current="page" href="#">Pricing</NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/CheckOut"
                  className="nav-link active" aria-current="page" href="#">CheckOut</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;