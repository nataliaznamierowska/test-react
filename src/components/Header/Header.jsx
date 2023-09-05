const Header = () => {
  return (
    <header className="header">
      <div className="header-shadow"></div>
      <div className="header-container container">
        <h1 className="header-title">
          Nasza firma oferuje najwyższej jakości produkty.
        </h1>
        <p className="header-subtitle p-tag">Nie wierz nam na słowo - sprawdź</p>
        <a className="header-button" href="#offer">
          oferta
        </a>
      </div>
    </header>
  );
};

export default Header;
