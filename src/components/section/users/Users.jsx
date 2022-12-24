import style from "./Users.module.css";
import userPhoto from "./../../../assets/img/b540fd8cd94b9e2a8590411dcc866463.jpg";
import { NavLink } from "react-router-dom";
import React from "react";
import Pagination from "../../common/pagination/Pagination";

const User = ({isDisabled, setFollow, setUnfollow, user}) => {
    return (
                <div>
                    <div>
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.small ? user.photos.small : userPhoto } alt={user.name} className={style.photo}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                user.followed ? 
                                <button disabled={isDisabled.some(item => item === user.id)} onClick={() => {
                                    setFollow(user.id)
                                }}>Unfollow</button> : 
                                <button disabled={isDisabled.some(item => item === user.id)} onClick={() => {
                                    setUnfollow(user.id)
                                }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </div>
                    </div>
                </div>
    )
}

const Users = ({users, pages, activePage, onPageChange, isDisabled, setFollow, setUnfollow}) => {

    return (
        <>  
        <Pagination pages={pages} activePage={activePage} onPageChange={onPageChange} />
        {users.map((user) => {
            return (
                <User key={user.id} user={user} isDisabled={isDisabled} setFollow={setFollow} setUnfollow={setUnfollow}/>
            )
        })}
    </>
    )
}

export default Users;