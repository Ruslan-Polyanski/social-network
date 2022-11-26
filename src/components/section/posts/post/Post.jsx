import "./Post.scss";
import React from "react";

const Post = ({text, like}) => {
    return (
      <div>
        <div>
        <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" alt="avatar" className="post__img"/>
        </div>
        <div className="post">
          {text}
          <br/>
          <span>{like}</span>
        </div>
      </div>
    )
}

export default Post;