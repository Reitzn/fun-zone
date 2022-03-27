import React from "react";
import './Banner.scss'


export default function Banner(props) {
    const {title, profileImageUrl, profileImageAltText, paragraphs} = props;

    return (
    <div className="banner-component">
        <h3>{title}</h3>
      <div className="clearfix">
        <img src={process.env.PUBLIC_URL + profileImageUrl} className="banner-component__profile-image col-md-6 float-md-end mb-3 ms-md-3" alt={profileImageAltText} />

        {paragraphs?.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
