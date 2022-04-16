import { render, fireEvent, screen } from "@testing-library/react";
import MessageButton from "./MessageButton";

const setup = () => {
  const utils = render(
      <MessageButton />
  );

  const messageButton = utils.getByTestId('messageButton');
  fireEvent.click(messageButton);

  const subject = utils.getByTestId('subject');
  const message = utils.getByTestId('message');
  const submitButton = utils.getByTestId('submit');
  const closeButton = utils.getByTestId('close');

  return {
    subject,
    message,
    submitButton,
    closeButton,
    ...utils,
  };
};

test("lets the user know there was a log out error", async () => {
  const { subject, message, submitButton, closeButton, } = setup();
  fireEvent.click(closeButton);

  // Setting up test for use once messaging is implemented 
});
