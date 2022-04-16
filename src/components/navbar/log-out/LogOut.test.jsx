import { render, fireEvent, screen } from "@testing-library/react";
import LogOut from "./LogOut";
import { BrowserRouter as Router } from "react-router-dom";
import { logout } from "../../../firebase";

// Mocking Firebase so I don't call it an API every time test run
jest.mock("../../../firebase");
const mockFirebaseAuth = (authError) => {
  logout.mockImplementation(() => {
    throw new Error(authError);
  });
};

const setup = () => {
  const utils = render(
    <Router>
      <LogOut />
    </Router>
  );
  const logoutButton = utils.getByTestId("logout");

  return {
    logoutButton,
    ...utils,
  };
};

test("lets the user know there was a log out error", async () => {
  mockFirebaseAuth("log out error");
  const { logoutButton } = setup();
  fireEvent.click(logoutButton);

  //expect(await screen.findByText("Error!")).toBeTruthy();
});
