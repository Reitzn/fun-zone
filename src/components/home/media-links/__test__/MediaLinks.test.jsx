import { render, screen } from "@testing-library/react";
import RenderData from "./renderData.mock.json";

import MediaLinks from "../MediaLinks";
import { BrowserRouter as Router } from "react-router-dom";

test("Renders the Media Links with correct props", async () => {
  render(
    <Router>
      <MediaLinks {...RenderData[0]} />
    </Router>
  );

  expect(screen.getByAltText(RenderData[0].links[0]?.linkAltText)).toBeTruthy();
  expect(screen.queryAllByRole("link")).toBeTruthy();
  expect(screen.queryAllByRole("img")).toBeTruthy();
});

test("If links are not provided, it should not render empty links", async () => {
  render(
    <Router>
      <MediaLinks {...RenderData[1]} />
    </Router>
  );

  expect(screen.queryByRole("link")).toBeNull();
  expect(screen.queryByRole("img")).toBeNull();
});
