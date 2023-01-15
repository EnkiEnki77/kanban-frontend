import { render, screen } from "@testing-library/react";
import Header from "../Header";
import React from "react";

describe("header component", () => {
  it("renders mobile logo at small screen size", async () => {
    render(<Header />);

    const logo = screen.getByAltText(/mobile logo/i);

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      "src",
      expect.stringContaining("logo-mobile.svg")
    );
  });
});
