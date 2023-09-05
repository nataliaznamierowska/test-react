const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container container">
        <p className="nav-logo p-tag">moja firma</p>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <a className="nav-menu-link" href="#about">
              o nas
            </a>
          </li>
          <li className="nav-menu-item">
            <a className="nav-menu-link" href="#offer">
              oferta
            </a>
          </li>
          <li className="nav-menu-item">
            <a className="nav-menu-link disabled" href="#contact">
              kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
