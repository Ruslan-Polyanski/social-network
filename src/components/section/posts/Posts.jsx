import Post from "./post/Post.jsx";
import "./Posts.scss";

const Posts = () => {
    return (
      <div>
        <div className="title">My posts</div>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    )
}

export default Posts;