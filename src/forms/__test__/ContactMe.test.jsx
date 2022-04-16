import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ContactMe from "../ContactMe";


const setup = () => {
  const utils = render(
  <Router>
    <ContactMe />
  </Router>
  );

  const name = utils.getByTestId('name');
  const email = utils.getByTestId('email');
  const subject = utils.getByTestId('subject');
  const message = utils.getByTestId('message');
  const submit = utils.getByTestId('submit');

  return {
    name,
    email,
    subject,
    message,
    submit,
    ...utils,
  }
}

test("should submit without a problem", async () => {
  const {name, email, subject, message, submit} = setup();

  fireEvent.change(name, {target: {value: 'Testing McTesterson'}});
  fireEvent.change(email, {target: {value: 'testing@testing.com'}});
  fireEvent.change(subject, {target: {value: 'Hello there Sir'}});
  fireEvent.change(message, {target: {value: 'What up Testing McTesterson!'}});
  fireEvent.click(submit);
 });

 test("should submit display form errors when form is bad", async () => {
  const {name, email, subject, message, submit} = setup();

  fireEvent.change(name, {target: {value: ''}});
  fireEvent.change(email, {target: {value: 'testing@testing.com'}});
  fireEvent.change(subject, {target: {value: 'Hello there Sir'}});
  fireEvent.change(message, {target: {value: 'What up Testing McTesterson!'}});
  fireEvent.click(submit);

  expect(await screen.findByText('Please let me know who you are.')).toBeTruthy();
  expect(await screen.findByText('Please enter an email so I can get back to you.')).toBeTruthy();
  expect(await screen.findByText('Please let me know what this is about.')).toBeTruthy();
  expect(await screen.findByText("Don't spam my email.")).toBeTruthy();

 });
