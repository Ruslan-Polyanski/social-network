import style from "./Pagination.module.css";
import React from "react";


const Pagination = ({pages, activePage, onPageChange}) => {

    return (
        <div className={style.buttonPages}>
            {pages.map((item) => { return <span key={item} className={ activePage === item ? style.activePage : ""} onClick={() => onPageChange(item)}> {item} </span> })}
        </div>
    )
}

export default Pagination;