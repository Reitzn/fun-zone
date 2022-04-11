import React from "react";
import ResumeCarousel from "../components/home/resume-carousel/ResumeCarousel";

export default function Resume(props) {
  const { title, subtitle, jobs, education } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>

      <h2>Education</h2>
      <ResumeCarousel jobs={education} />

      <h2>Work Experance</h2>
      <ResumeCarousel jobs={jobs} />
    </div>
  );
}
