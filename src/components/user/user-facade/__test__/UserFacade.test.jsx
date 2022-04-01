import { render, screen } from "@testing-library/react";
import RenderData from './renderData.mock.json'; 

import UserFacade from "../UserFacade";
import { BrowserRouter as Router } from "react-router-dom";


test("Renders the User Facade correctly", async () => {

  render(
    <Router>
      <UserFacade {...RenderData} />
    </Router>
  );

    expect(screen.getAllByText(RenderData.users[0].userName)).toBeTruthy();
    expect(screen.getAllByText(RenderData.users[0].profileDescription)).toBeTruthy();
    // How to get image?
    // What else to test in the facade?
    // When I add filtering, test that. 
    
});
