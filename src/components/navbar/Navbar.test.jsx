import { render, screen, waitFor } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

jest.mock("../../hooks/useAuth");
const mockUseAuth = () => {
  useAuth.mockImplementation(() => {
    return {
      uid: "1234",
    };
  });
};

test("renders unauthenticatd  Navbar, Login and Sign Up buttons", async () => {
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

test("renders authenticatd  Navbar, Profile, Users, Log Out buttons", async () => {
  mockUseAuth();
  render(
    <Router>
      <Navbar />
    </Router>
  );

  await waitFor(() => {
    expect(screen.getByText("Home")).toBeTruthy();
    expect(screen.getByText("Resume")).toBeTruthy();
    expect(screen.getByText("Contact Me")).toBeTruthy();
    expect(screen.getByText("Profile")).toBeTruthy();
    expect(screen.getByText("Users")).toBeTruthy();
    expect(screen.getByText("Log Out")).toBeTruthy();
  });
});
