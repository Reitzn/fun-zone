import { render, screen } from "@testing-library/react";
import RenderData from './renderData.mock.json'; 

import UserCard from "../UserCard";
import { BrowserRouter as Router } from "react-router-dom";


test("Renders the User info", async () => {

  render(
    <Router>
      <UserCard {...RenderData} />
    </Router>
  );

    expect(screen.getByText(RenderData.userName)).toBeTruthy();
    expect(screen.getByText(RenderData.profileDescription)).toBeTruthy();
    // How to get image?
    
});
