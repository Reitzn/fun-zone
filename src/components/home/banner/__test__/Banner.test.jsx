import { render, screen } from "@testing-library/react";

import Banner from "../Banner";
import { BrowserRouter as Router } from "react-router-dom";

const renderData = {
    profileImageUrl: "NickReitz.jpg",
    profileImageAltText: "Image of me",
    title: "About Me",
    paragraphs: [
      "Hello! My name is Nick Reitz. I am currently working on my graduate degree in Computer Science at Grand Valley State University. I have a bachelor’s in Computer Information Systems form Northwood University and have a few years of enterprise level software development experience.",
      "I currently work as a Software Engineer building out Adobe Experience Manager components. Previously, I worked as a Software Developer for Auto Owners Insurance building out ECM solutions.",
      "I love to travel and take photos when I’m not working. One of my goals is to visit every national park. While not traveling or taking photos, I enjoy programing.",
    ],
  };

test("Renders the Media Links with correct props", async () => {

  render(
    <Router>
      <Banner {...renderData} />
    </Router>
  );

    expect(screen.getByAltText(renderData.profileImageAltText)).toBeTruthy();
    expect(screen.getByText(renderData.title)).toBeTruthy();
    expect(screen.getByText(renderData.paragraphs[0])).toBeTruthy();
    expect(screen.getByRole('img')).toBeTruthy();

});
