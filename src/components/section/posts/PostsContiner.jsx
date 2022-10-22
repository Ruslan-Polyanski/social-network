// import StoreContext from "../../../StoreContext.jsx";
// import Post from "./post/Post.jsx";
// import "./Posts.scss";
import Posts from "./Posts.jsx";
import { connect } from "react-redux/es/exports";

// const PostsContiner = ({dataPost}) => {

//     return (
//       <StoreContext.Consumer>
//         {
//           (store) => {

//            const dataPost = store.getState().profile.dataPost;
           
//            return (
//               <div>
//                 <div className="title">My posts</div>
//                 {dataPost.map((item) => {
//                   return <Post key={item.id} text={item.text} like={item.like}/>
//                 })}
//               </div>
//            )
//           }
//         }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        dataPost: state.profile.dataPost,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const PostsContiner = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContiner;