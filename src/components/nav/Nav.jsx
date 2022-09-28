import "./Nav.scss";

const Nav = () => {
    return (
      <nav className="nav">
      <ul className="nav__list">
          <li className="nav__item"><a href="/profile" className="nav__link">Profile</a></li>
          <li className="nav__item"><a href="/dialogs" className="nav__link">Messages</a></li>
          <li className="nav__item"><a href="/news" className="nav__link">News</a></li>
          <li className="nav__item"><a href="/music" className="nav__link">Music</a></li>
          <li className="nav__item"><a href="/settings" className="nav__link">Settings</a></li>
        </ul>
      </nav>
    )
}

export default Nav;