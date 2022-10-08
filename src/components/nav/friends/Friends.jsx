import style from "./Friends.module.css";

const Friends = ({friends}) => {
    return (
        <div className={style.friends}>
            {friends.map((item) => {
                return (
                    <div key={item.id} className={style.item}>
                        <div><img className={style.img} src="https://klike.net/uploads/posts/2020-07/1594969571_2.jpg" alt="friend img" /></div>
                        {item.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Friends;