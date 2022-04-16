import { render, fireEvent, screen } from "@testing-library/react";
import SignUp from "./SignUp";
import { BrowserRouter as Router } from "react-router-dom";
import { signup } from "../../../firebase";


// Mocking Firebase so I don't call it an API every time test run
jest.mock("../../../firebase");
const mockFirebaseAuth = (authError) => {
  signup.mockImplementation(() => {
      throw new Error(authError);
  });
};

const setup = () => {
  const utils = render(
  <Router>
    <SignUp />
  </Router>
  );
  const button = utils.getByTestId('signUp');
  fireEvent.click(button);

  const email = utils.getByTestId('emailAddress');
  const password = utils.getByTestId('password');
  const passwordTwo = utils.getByTestId('passwordTwo');
  const submitButton = utils.getByTestId('submit');
  const closeButton = utils.getByTestId('close');

  return {
    email,
    password,
    passwordTwo,
    submitButton,
    closeButton,
    ...utils,
  }
}

test("lets the user know they inputed an invalid email", async () => {
  mockFirebaseAuth('auth/invalid-email');
  const {email, password, passwordTwo, submitButton} = setup()

  fireEvent.change(email, {target: {value: 'testing'}})
  fireEvent.change(password, {target: {value: '123456789'}})
  fireEvent.change(passwordTwo, {target: {value: '123456789'}})
  fireEvent.click(submitButton);
 
  expect(await screen.findByText('Invalid Email')).toBeTruthy();
});

test("lets the user know the account is already in use", async () => {
  mockFirebaseAuth('auth/email-already-in-use');
  const {email, password, passwordTwo, submitButton} = setup()

  fireEvent.change(email, {target: {value: 'testing@testing.com'}})
  fireEvent.change(password, {target: {value: '123456789'}})
  fireEvent.change(passwordTwo, {target: {value: '123456789'}})
  fireEvent.click(submitButton);
 
  expect(await screen.findByText('This email already has an account')).toBeTruthy();
});

test("lets the user know they entered a week password", async () => {
  mockFirebaseAuth('auth/weak-password');
  const {email, password, passwordTwo, submitButton} = setup()

  fireEvent.change(email, {target: {value: 'testing@testing.com'}})
  fireEvent.change(password, {target: {value: '123456789'}})
  fireEvent.change(passwordTwo, {target: {value: '123456789'}})
  fireEvent.click(submitButton);
 
  expect(await screen.findByText('Password should be at least 6 characters')).toBeTruthy();
});

test("lets the user know that something went wrong", async () => {
  mockFirebaseAuth('Catch everything else');
  const {email, password, passwordTwo, submitButton} = setup()

  fireEvent.change(email, {target: {value: 'testing@testing.com'}})
  fireEvent.change(password, {target: {value: '123456789'}})
  fireEvent.change(passwordTwo, {target: {value: '123456789'}})
  fireEvent.click(submitButton);
 
  expect(await screen.findByText('Something Went Wrong')).toBeTruthy();
});

test("lets the user know the passwords don't match", async () => {
  const {email, password, passwordTwo, submitButton, closeButton} = setup()

  fireEvent.change(email, {target: {value: 'testing@testing.com'}})
  fireEvent.change(password, {target: {value: '123456789'}})
  fireEvent.change(passwordTwo, {target: {value: '12345'}})
  fireEvent.click(submitButton);
 
  expect(await screen.findByText('Passords Do Not Match')).toBeTruthy();

    // Close the Modal for code coverage 
    fireEvent.click(closeButton);
    expect(screen.queryByText('Passords Do Not Match')).toBeNull();
});


