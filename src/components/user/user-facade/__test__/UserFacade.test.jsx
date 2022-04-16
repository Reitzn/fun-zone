import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import UserFacade from "../UserFacade";
import RenderData from './renderData.mock.json'; 

const setup = () => {
  const utils = render(
  <Router>
      <UserFacade {...RenderData} />
  </Router>
  );

  const searchName = utils.getByTestId('searchName');
  const submitButton = utils.getByTestId('submit');

  return {
    searchName,
    submitButton,
    ...utils,
  }
}

test("lets the user know they used an invalid email", async () => {
  const {searchName, submitButton} = setup()

  fireEvent.change(searchName, {target: {value: 'Mellisa Bartrop'}})
  fireEvent.click(submitButton);
 
  // After search, only one user should be on the screen
  expect(await screen.findAllByText('Message')).toHaveLength(1);
});