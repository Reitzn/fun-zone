import { render, fireEvent, screen } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";
import { login } from "../../../firebase";

// Mocking Firebase so I don't call it an API every time test run
jest.mock("../../../firebase");
const mockFirebaseAuth = (authError) => {
  login.mockImplementation(() => {
      throw new Error(authError);
  });
};

const setup = () => {
  const utils = render(
  <Router>
    <Login />
  </Router>
  );
  const button = utils.getByTestId('login');
  fireEvent.click(button);

  const email = utils.getByTestId('emailAddress');
  const password = utils.getByTestId('password');
  const submitButton = utils.getByTestId('submit');
  const closeButton = utils.getByTestId('close');


  return {
    email,
    password,
    submitButton,
    closeButton,
    ...utils,
  }
}

test("lets the user know they used an invalid email", async () => {
  mockFirebaseAuth('auth/invalid-email');
  const {email, password, submitButton} = setup()

  fireEvent.change(email, {target: {value: 'testing'}})
  fireEvent.change(password, {target: {value: '123456789'}})
  fireEvent.click(submitButton);
 
  expect(await screen.findByText('Invalid Email')).toBeTruthy();
});

test("lets the user know they used the wrong password", async () => {
  mockFirebaseAuth('auth/wrong-password');
  const {email, password, submitButton} = setup()

  fireEvent.change(email, {target: {value: 'testing@testing.com'}})
  fireEvent.change(password, {target: {value: '123456789'}})
  fireEvent.click(submitButton);
 
  expect(await screen.findByText('Wrong Password')).toBeTruthy();
});

test("lets the user know there was a log in error", async () => {
  mockFirebaseAuth('everything else');
  const {email, password, submitButton, closeButton} = setup()

  fireEvent.change(email, {target: {value: 'testing@testing.com'}})
  fireEvent.change(password, {target: {value: '123456789'}})
  fireEvent.click(submitButton);
 
  expect(await screen.findByText('Login Error')).toBeTruthy();

  // Close the Modal for code coverage 
  fireEvent.click(closeButton);
  expect(screen.queryByText('Login Error')).toBeNull();
});


