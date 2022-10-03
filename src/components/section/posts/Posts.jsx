import Post from "./post/Post.jsx";
import "./Posts.scss";

const Posts = () => {

    const dataPost = [
      {id: 0, text: "text 1", like: 8},
      {id: 1, text: "text 2", like: 12},
      {id: 2, text: "text 3", like: 4},
      {id: 3, text: "text 4", like: 7},
      {id: 4, text: "text 5", like: 23},
      {id: 5, text: "text 6", like: 11},
    ]

    return (
      <div>
        <div className="title">My posts</div>
        {dataPost.map((item) => {
          return <Post key={item.id} text={item.text} like={item.like}/>
        })}
      </div>
    )
}

export default Posts;