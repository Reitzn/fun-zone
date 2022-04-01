import { render, screen, waitFor } from "@testing-library/react";
import './matchMedia.mock.js'; 
import RenderData from './renderData.mock.json'; 

import ResumeCarousel from "../ResumeCarousel";
import { BrowserRouter as Router } from "react-router-dom";
//import "@testing-library/jest-dom";


test("Renders the Resume Carousel with correct props", async () => {

  render(
    <Router>
      <ResumeCarousel {...RenderData} />
    </Router>
  );

    expect(await screen.findAllByText(RenderData.jobs[0].jobTitle)).toBeTruthy();
    expect(await screen.findAllByText(RenderData.jobs[0].companyName)).toBeTruthy();
    expect(await screen.findAllByText(RenderData.jobs[0].jobTasks[0])).toBeTruthy();

    // Add useScreenSize for mobile desktip arrows on slider 
    // Update slider to remove arrows lol
});
