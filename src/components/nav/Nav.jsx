import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = ({navItem}) => {

    return (
      <nav className="nav">
      <ul className="nav__list">
        {navItem.map((item) => {
          return <li key={item.id} className="nav__item"><NavLink to={item.path} className="nav__link">{item.text}</NavLink></li>
        })}
        </ul>
      </nav>
    )
}

export default Nav;