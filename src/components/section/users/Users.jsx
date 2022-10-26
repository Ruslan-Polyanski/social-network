import axios from "axios";
import style from "./Users.module.css";
import userPhoto from "./../../../assets/img/b540fd8cd94b9e2a8590411dcc866463.jpg";


const Users = ({users, follow, unfollow, setUsers}) => {

    if(users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {setUsers(response.data.items)});
    }

    return (
        <>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <div>
                            <div><img src={user.photos.small ? user.photos.small : userPhoto } alt={user.name} className={style.photo}/></div>
                            <div>
                                {
                                    user.followed ? 
                                    <button onClick={() => {unfollow(user.id)}}>Unfollow</button> : 
                                    <button onClick={() => {follow(user.id)}}>Follow</button>
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