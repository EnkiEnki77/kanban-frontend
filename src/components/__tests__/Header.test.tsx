import { render, screen } from "@testing-library/react";
import Header from "../Header";
import React from "react";

describe("header component layout", () => {
  it("renders mobile logo at small screen size", async () => {
    render(<Header />);

    const logo = screen.getByAltText(/mobile logo/i);

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      "src",
      expect.stringContaining("logo-mobile.svg")
    );
  });

  it("renders board name", async () => {
    render(<Header />);

    const boardName = screen.getByRole("heading", { name: /no board/i });

    expect(boardName).toBeInTheDocument();
  });

  it("renders dropdown arrow at small screen size", async () => {
    render(<Header />);

    const arrow = screen.getByAltText(/dropdown/i);

    expect(arrow).toBeInTheDocument();
    expect(arrow).toHaveAttribute(
      "src",
      expect.stringContaining("icon-chevron-down.svg")
    );
  });

  it("renders button to add task", async () => {
    render(<Header />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("renders vertical elipsis to edit board", async () => {
    render(<Header />);

    const verticalElipsis = screen.getByAltText(/edit board/i);

    expect(verticalElipsis).toBeInTheDocument();
    expect(verticalElipsis).toHaveAttribute(
      "src",
      expect.stringContaining("icon-vertical-ellipsis.svg")
    );
  });
});
