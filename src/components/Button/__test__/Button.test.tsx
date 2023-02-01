import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  test("renders the text correctly", () => {
    render(<Button text="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("calls the onClick function when clicked", () => {
    const mockClick = jest.fn();
    render(<Button text="Click Me" onClick={mockClick} />);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(mockClick).toHaveBeenCalled();
  });

  test("renders the correct type of button", () => {
    render(<Button text="Submit" type="submit" />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
  });

  test("renders with correct background color", () => {
    render(<Button text="Click Me" backgroundColor="#000000" />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveStyle("background-color: #000000");
  });

  test("renders with correct text color", () => {
    render(<Button text="Click Me" textColor="#ffffff" />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveStyle("color: #ffffff");
  });
});
