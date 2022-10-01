import Posts from "./posts/Posts";
import AddText from "./areaText/AddText";
import "./Section.scss";

const Section = () => {
    return (
        <section className="section">
        <article className="article">
          <AddText/>
          <Posts/>
        </article>
ddd
      </section>
    )
}

export default Section;