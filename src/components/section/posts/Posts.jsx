import StoreContext from "../../../StoreContext.jsx";
import Post from "./post/Post.jsx";
import "./Posts.scss";

const Posts = ({dataPost}) => {

    return (
      <StoreContext.Consumer>
        {
          (store) => {

           const dataPost = store.getState().profile.dataPost;
           
           return (
              <div>
                <div className="title">My posts</div>
                {dataPost.map((item) => {
                  return <Post key={item.id} text={item.text} like={item.like}/>
                })}
              </div>
           )
          }
        }
        </StoreContext.Consumer>
    )
}

export default Posts;