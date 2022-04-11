import React from "react";
import Slider from "react-slick";
import JobTile from "./JobTile";
import { Constants } from "../../../utils/Constants";

import "./ResumeCarousel.scss";

export default function ResumeCarousel(props) {
  const { jobs } = props;

  const settings = {
    arrows: true,
    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 1.25,
    slidesToScroll: 1,
  };

  // This is causing my test to fail when added to setting, figure out why.
  // Something to do with the resposive props and rendering.

  // responsive: [
  //   {
  //     breakpoint: Constants.BREAKPOINTS.TABLET,

  //     settings: {
  //       arrows: false,
  //     },
  //   },
  // ],

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
