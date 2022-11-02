import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = ({login, authorized}) => {
    return (
      <header className="header">
        <a href="/" className="header__logo">
          <img src="https://cdn-icons-png.flaticon.com/512/4260/4260120.png" alt="logo" className="header__img"/>
        </a>
        <div className="header__login">
          {
            authorized ? login: <NavLink to="/login">Login</NavLink>
          }
        </div>
      </header>
    )
}

export default Header;