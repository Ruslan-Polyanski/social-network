import "./Header.scss";

const Header = () => {
    return (
      <header className="header">
        <a href="/" className="header__logo">
          <img src="https://cdn-icons-png.flaticon.com/512/4260/4260120.png" alt="logo" className="header__img"/>
        </a>
      </header>
    )
}

export default Header;