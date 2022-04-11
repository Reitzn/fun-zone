import React from "react";
import "./MediaLinks.scss";

export default function MediaLinks(props) {
  const { title, links } = props;

  return (
    <div className="media-links-component">
      <h3 className="media-links-component__title text-center">{title}</h3>
      <ul className="media-links-component__row row">
        {links?.map((link) => (
          <li key={link.linkUrl} className="col">
            <a href={link.linkUrl} target="_blank" rel="noreferrer">
              <img className="media-links-component__image" src={process.env.PUBLIC_URL + link.imageUrl} alt={link.linkAltText} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
