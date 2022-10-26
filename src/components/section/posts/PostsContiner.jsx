import Posts from "./Posts.jsx";
import { connect } from "react-redux";


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