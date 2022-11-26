import PostsContiner from "./posts/PostsContiner";
import AddTextContiner from "./areaText/AddTextContiner";
import "./Section.scss";
import Preloader from "../preloader/Preloader";
import basePhoto from "./../../assets/img/b540fd8cd94b9e2a8590411dcc866463.jpg";
import ProfileStatus from "./../section/ProfileStatus.jsx";
import React from "react";

const Section = (props) => {

      if(!props.userProfile){
        return <Preloader />
      }

      return (
        <section className="section">
          <div>
            {
              !props.userProfile.photos.small 
                  ? <img src={basePhoto} alt="phot" width="100px" /> 
                  : <img src={props.userProfile.photos.small} alt="images" />
            }
          </div>
        <article className="article">
          <ProfileStatus status={props.status} updateStatusProfileCreateThunk={props.updateStatusProfileCreateThunk} />
          <AddTextContiner />
          <PostsContiner />
        </article>
ddd
      </section>
    )
}

export default Section;