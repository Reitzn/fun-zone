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

    expect(await screen.findByText("Software Engineer")).toBeTruthy();

});
