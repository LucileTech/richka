// tests/components/HomeComponent.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HomeComponent from "../../src/components/HomeComponent"; // adjust the import path based on your project structure

describe("HomeComponent", () => {
  const props = {
    imgSrc: "path/to/image.jpg",
    imgAlt: "Image Alt Text",
    title: "Test Title",
    content: <p>Content</p>,
  };

  it("renders with correct props", () => {
    render(<HomeComponent {...props} />);

    // Assert that the component renders with the correct elements and content
    expect(screen.getByAltText(props.imgAlt)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
