import React from "react";
import Slider from "react-slick";
import JobTile from "./JobTile";

import "./ResumeCarousel.scss"

export default function ResumeCarousel(props) {
  const { jobs } = props;

  const settings = {
    arrows: true,
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 1.25,
    slidesToScroll: 1,
  };

  return (
    <div className="resume-carousel-component">
      <Slider {...settings}>
        {jobs?.map((job) => (
          <div className="resume-carousel-component__tile">
            <JobTile {...job} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
