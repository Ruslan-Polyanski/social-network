import style from "./Users.module.css";


const Users = ({users, follow, unfollow, setUsers}) => {

    if(users.length === 0){
        setUsers(
            [
                {id: 1, img: "https://v1.popcornnews.ru/k2/persons/canvas/970x700/upload/PsJkKl.jpg", followed: false, fullName: "Monica Bellucci", status: "I am an actor", location: {country: "USE", city: "New York"}},
                {id: 2, img: "https://v1.popcornnews.ru/k2/persons/canvas/970x700/upload/PsJkKl.jpg", followed: true, fullName: "Den Simons", status: "I am a worker", location: {country: "UK", city: "London"}},
                {id: 3, img: "https://v1.popcornnews.ru/k2/persons/canvas/970x700/upload/PsJkKl.jpg", followed: false, fullName: "Ted Chan", status: "I am a write", location: {country: "Spain", city: "Madrid"}},
                {id: 4, img: "https://v1.popcornnews.ru/k2/persons/canvas/970x700/upload/PsJkKl.jpg", followed: true, fullName: "Nil Shosterman", status: "I am unemployed", location: {country: "Russia", city: "Moscow"}},
            ]
        )
    }

    return (
        <>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <div>
                            <div><img src={user.img} alt={user.fullName} className={style.photo}/></div>
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
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </div>
                            <div>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </div>
                        </div>

                    </div>
                )
            })}
        </>
    )
}

export default Users;