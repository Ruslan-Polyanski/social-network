import style from "./Users.module.css";
import userPhoto from "./../../../assets/img/b540fd8cd94b9e2a8590411dcc866463.jpg";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";


const Users = ({users, follow, unfollow, pages, activePage, onPageChange}) => {


    return (
        <>  
        <div className={style.buttonPages}>
            {pages.map((item) => { return <span key={item} className={ activePage === item ? style.activePage : ""} onClick={() => onPageChange(item)}> {item} </span> })}
        </div>

        {users.map((user) => {
            return (
                <div key={user.id}>
                    <div>
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.small ? user.photos.small : userPhoto } alt={user.name} className={style.photo}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                user.followed ? 
                                <button onClick={() => {
                                    usersAPI.getUnfollow(user.id)
                                    .then(data => {
                                        if(data.resultCode === 0){
                                            unfollow(user.id)
                                        }
                                    });
                                }}>Unfollow</button> : 
                                <button onClick={() => {
                                    usersAPI.getFollow(user.id)
                                    .then(data => {
                                        if(data.resultCode === 0){
                                            follow(user.id)
                                        }
                                    });
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
        })}
    </>
    )
}

export default Users;