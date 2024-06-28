import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

// Mock the getAssetPath function
jest.mock("../utils/getAssetPath", () => ({
  getAssetPath: jest.fn().mockReturnValue("/mocked/path/home.webp"),
}));

describe("Home component", () => {
  test("renders the Home component with correct props", () => {
    render(<Home />);

    // Check if the image is rendered with the correct src and alt text
    const image = screen.getByAltText("Wellness Image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/mocked/path/home.webp");

    // Check if the title is rendered
    const title = screen.getByText("Wellness at Your Fingertips");
    expect(title).toBeInTheDocument();

    // Check if the content paragraphs are rendered
    const paragraph1 = screen.getByText(
      "We’re Richka. We create natural products for your well-being and beauty from our own herbs."
    );
    expect(paragraph1).toBeInTheDocument();

    const paragraph2 = screen.getByText("LEARN MORE");
    expect(paragraph2).toBeInTheDocument();
    expect(paragraph2.closest("a")).toHaveAttribute("href", "/richka/#/oils");
  });
});
