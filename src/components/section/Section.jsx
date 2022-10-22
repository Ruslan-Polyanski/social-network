import PostsContiner from "./posts/PostsContiner";
import AddTextContiner from "./areaText/AddTextContiner";
import "./Section.scss";

const Section = ({dataPost, dispatch, dataTextArea}) => {
    return (
        <section className="section">
        <article className="article">
          <AddTextContiner />
          <PostsContiner />
        </article>
ddd
      </section>
    )
}

export default Section;