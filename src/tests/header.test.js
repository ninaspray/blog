import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from "../components/Header";

describe("Header", () => {
    it("contains title", () => {
      render(<Header />);
      expect(screen.getByText("Blog Demo")).toBeInTheDocument();
    });
    it("contains sub heading", () => {
      render(<Header />);
      expect(screen.getByText("Introduction to React using a public repo on GitHub")).toBeInTheDocument();
    });
    it("shows theme buttons", () => {
      const { container } = render(<Header />);
      expect(container.lastChild).toMatchSnapshot();
    })
  });