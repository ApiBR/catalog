import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../src/App";

describe("App", () => {
  it("renders the header with correct title", () => {
    render(<App />);
    expect(screen.getByText(/API BR - Catálogo/i)).toBeInTheDocument();
  });

  it("renders the main content with projects", () => {
    render(<App />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders the footer", () => {
    render(<App />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
