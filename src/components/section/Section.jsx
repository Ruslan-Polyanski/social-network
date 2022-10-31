import PostsContiner from "./posts/PostsContiner";
import AddTextContiner from "./areaText/AddTextContiner";
import "./Section.scss";
import Preloader from "../preloader/Preloader";

const Section = (props) => {
    if(!props.photos.small){
      return <Preloader/>
    }
    console.log(props.photos)
    return (
        <section className="section">
          <div>
            <img src={props.photos.small} alt="images" />
          </div>
        <article className="article">
          <AddTextContiner />
          <PostsContiner />
        </article>
ddd
      </section>
    )
}

export default Section;