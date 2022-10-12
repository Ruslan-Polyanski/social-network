import Posts from "./posts/Posts";
import AddText from "./areaText/AddText";
import "./Section.scss";

const Section = ({dataPost, addDataPost, changeTextState, dataTextArea}) => {
    return (
        <section className="section">
        <article className="article">
          <AddText dataTextArea={dataTextArea} changeTextState={changeTextState} addDataPost={addDataPost} />
          <Posts dataPost={dataPost} />
        </article>
ddd
      </section>
    )
}

export default Section;