import { render, screen, waitFor } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock useAsync hook
import useAuth from '../../hooks/useAuth';
jest.mock('../../hooks/useAuth');


test("renders unauthenticatd  Navbar, proper buttons and tabs", async () => {
  useAuth.mockReturnValue([
    { data: 'mockData', loadingState: 'mockState' },
    () => jest.fn(),
  ]);

  render(
    <Router>
      <Navbar />
    </Router>
  );

  await waitFor(() => {
    expect(screen.getByText("Home")).toBeTruthy();
    expect(screen.getByText("Resume")).toBeTruthy();
    expect(screen.getByText("Contact Me")).toBeTruthy();
    expect(screen.getByText("Login")).toBeTruthy();
    expect(screen.getByText("Sign Up")).toBeTruthy();

  });
});
