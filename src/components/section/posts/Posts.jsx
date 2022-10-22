
import Post from "./post/Post.jsx";
import "./Posts.scss";

const Posts = ({dataPost}) => {

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