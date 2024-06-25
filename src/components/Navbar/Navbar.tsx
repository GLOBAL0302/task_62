
const Navbar = () => {
  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" href="#">Home</a>
          <div className="ms-auto" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">CheckOut</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;