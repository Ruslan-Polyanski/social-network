import axios from "axios";
import style from "./Users.module.css";
import userPhoto from "./../../../assets/img/b540fd8cd94b9e2a8590411dcc866463.jpg";
import React from "react";

class Users extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSizeUsers}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        });
    }

    
    onPageChange = (numper) => {
        this.props.setPage(numper)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numper}&count=${this.props.pageSizeUsers}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render(){
        const amountPages = Math.ceil(this.props.totalUsersCount / this.props.pageSizeUsers);
        const pages = [];

        for(let i = 1; i <= amountPages; ++i){
            pages.push(i);
        }

        return (
        <>  
            <div className={style.buttonPages}>
                {pages.map((item) => { return <span key={item} className={ this.props.activePage === item ? style.activePage : ""} onClick={() => this.onPageChange(item)}> {item} </span> })}
            </div>

            {this.props.users.map((user) => {
                return (
                    <div key={user.id}>
                        <div>
                            <div><img src={user.photos.small ? user.photos.small : userPhoto } alt={user.name} className={style.photo}/></div>
                            <div>
                                {
                                    user.followed ? 
                                    <button onClick={() => {this.props.unfollow(user.id)}}>Unfollow</button> : 
                                    <button onClick={() => {this.props.follow(user.id)}}>Follow</button>
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
        );
    }

}

export default Users;