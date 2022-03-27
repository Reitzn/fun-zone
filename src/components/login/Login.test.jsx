import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import ReactDOM from 'react-dom';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("Login modal should open and close", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  let loginButton = screen.getByRole("button");

  // Modal is not opened
  expect(loginButton).toBeTruthy();
  expect(screen.queryByText("Email address")).not.toBeInTheDocument();

  // Modal Opened
  fireEvent.click(loginButton);
  expect(screen.queryByText("Email address")).toBeInTheDocument();

  // Modal closed
  fireEvent.click(screen.queryByText("Close"));
  await waitFor(() => {
    expect(screen.queryByText("Email address")).not.toBeInTheDocument();
  });
});


// test("Log in should should error when bad log in", () => {

//   act(() => {
//     ReactDOM.render(
//       <Router>
//         <Login />
//       </Router>,
//       container
//     );
//   });

//   let loginButton = screen.getByRole("button");
//   expect(loginButton).toBeTruthy();

//   fireEvent.click(loginButton);

//   let emailAddress = screen.getByLabelText("Email address");
//   let password = screen.getByLabelText("Password");
//   act(() => {
//     fireEvent.change(emailAddress, {
//       target: { value: "unit-test@gmail.com" },
//     });
//     fireEvent.change(password, { target: { value: "test1234" } });
//     let button = screen.getByTestId("login-button");
//     button.dispatchEvent(new MouseEvent('click', {bubbles: true}));

//   });

//   expect(screen.queryByText("Login Error")).toBeTruthy();
// });
