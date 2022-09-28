import "./Post.scss";

const Post = (props) => {
  console.log(props)
    return (
      <div>
        <div>
        <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" alt="avatar" className="post__img"/>
        </div>
        <div className="post">
          {props.text}
          <br/>
          <span>{props.like}</span>
        </div>
      </div>
    )
}

export default Post;