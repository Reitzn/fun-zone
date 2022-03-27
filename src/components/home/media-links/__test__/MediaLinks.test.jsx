import { render, screen } from "@testing-library/react";
import RenderData from './renderData.mock.json'; 

import MediaLinks from "../MediaLinks";
import { BrowserRouter as Router } from "react-router-dom";


test("Renders the Media Links with correct props", async () => {

  render(
    <Router>
      <MediaLinks {...RenderData} />
    </Router>
  );

    expect(screen.getByAltText("Link to my Instagram account")).toBeTruthy();

});
