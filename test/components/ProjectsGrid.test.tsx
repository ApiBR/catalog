import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProjectsGrid } from "../../src/components/ProjectsGrid";
import { projects } from "../../src/data/projects";

describe("ProjectsGrid", () => {
  it("renders all projects in English", () => {
    render(<ProjectsGrid language="en-US" />);
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(
        screen.getByText(project.description["en-US"]),
      ).toBeInTheDocument();
    });
  });

  it("renders all projects in Portuguese", () => {
    render(<ProjectsGrid language="pt-BR" />);
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(
        screen.getByText(project.description["pt-BR"]),
      ).toBeInTheDocument();
    });
  });

  it("renders all projects in Spanish", () => {
    render(<ProjectsGrid language="es-ES" />);
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(
        screen.getByText(project.description["es-ES"]),
      ).toBeInTheDocument();
    });
  });

  it("applies correct grid layout", () => {
    render(<ProjectsGrid language="en-US" />);
    const container = screen.getByTestId("projects-grid");
    expect(container).toHaveStyle({
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    });
  });
});
