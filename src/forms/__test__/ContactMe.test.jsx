import { render, screen } from "@testing-library/react";

import ContactMe from "../ContactMe";
import { BrowserRouter as Router } from "react-router-dom";

test("Renders the Contact form", async () => {

  render(
    <Router>
      <ContactMe />
    </Router>
  );

    expect(screen.getAllByLabelText("Name")).toBeTruthy();

});
