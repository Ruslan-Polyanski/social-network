import Post from "./post/Post.jsx";
import "./Posts.scss";

const Posts = () => {
    return (
      <div>
        <div className="title">My posts</div>
        <Post text="Text 1" like="8"/>
        <Post text="Text 2" like="12"/>
        <Post text="Text 3" like="4"/>
        <Post text="Text 4" like="7"/>
        <Post text="Text 5" like="23"/>
        <Post text="Text 6" like="11"/>
      </div>
    )
}

export default Posts;