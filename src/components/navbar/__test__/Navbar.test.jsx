import { render, screen, waitFor } from "@testing-library/react";
import Navbar from "../Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

// jest.mock("../../../hooks/useAuth", () => {
//   return {
//     useAuth: () => {
//       return {
//         currentUser: {}
//       };
//     },
//   };
// });

test("renders unauthenticatd  Navbar, proper buttons and tabs", async () => {
 
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


// test("renders authenticatd  Navbar, proper buttons and tabs", async () => {
//   render(
//     <Router>
//       <Navbar />
//     </Router>
//   );

//   await waitFor(() => {
//     expect(screen.getByText("Home")).toBeTruthy();
//     expect(screen.getByText("Resume")).toBeTruthy();
//     expect(screen.getByText("Contact Me")).toBeTruthy();
//     expect(screen.getByText("Profile")).toBeTruthy();
//     expect(screen.getByText("Users")).toBeTruthy();
//     expect(screen.getByText("Log Out")).toBeTruthy();
//   });
// });
