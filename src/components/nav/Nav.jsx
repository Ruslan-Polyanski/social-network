import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {

  const navItem = [
    {id: 0, path: "profile", text: "Profile"},
    {id: 1, path: "dialogs", text: "Messages"},
    {id: 2, path: "news", text: "News"},
    {id: 3, path: "music", text: "Music"},
    {id: 4, path: "settings", text: "Settings"},
  ]

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