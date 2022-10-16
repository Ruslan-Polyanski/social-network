import Posts from "./posts/Posts";
import AddText from "./areaText/AddText";
import "./Section.scss";

const Section = ({dataPost, dispatch, dataTextArea}) => {
    return (
        <section className="section">
        <article className="article">
          <AddText dataTextArea={dataTextArea} dispatch={dispatch} />
          <Posts dataPost={dataPost} />
        </article>
ddd
      </section>
    )
}

export default Section;