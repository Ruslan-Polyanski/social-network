import Posts from "./posts/Posts";
import AddTextContiner from "./areaText/AddTextContiner";
import "./Section.scss";

const Section = ({dataPost, dispatch, dataTextArea}) => {
    return (
        <section className="section">
        <article className="article">
          <AddTextContiner />
          <Posts />
        </article>
ddd
      </section>
    )
}

export default Section;