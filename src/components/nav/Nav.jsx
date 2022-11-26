import "./Nav.scss";
import { NavLink } from "react-router-dom";
import Friends from "./friends/Friends";
import React from "react";

const Nav = ({navItem, friends}) => {

    return (
      <nav className="nav">
      <ul className="nav__list">
        {navItem.map((item) => {
          return <li key={item.id} className="nav__item"><NavLink to={item.path} className="nav__link">{item.text}</NavLink></li>
        })}
        </ul>
        <div className="nav__friends">
          <h3 className="nav__h3">Friends</h3>
          <Friends friends={friends}/>
        </div>
      </nav>
    )
}

export default Nav;