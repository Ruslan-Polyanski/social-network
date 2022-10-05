import Posts from "./posts/Posts";
import AddText from "./areaText/AddText";
import "./Section.scss";

const Section = ({dataPost}) => {
    return (
        <section className="section">
        <article className="article">
          <AddText/>
          <Posts dataPost={dataPost} />
        </article>
ddd
      </section>
    )
}

export default Section;