import { render, screen } from "@testing-library/react";
import ProjectGrid from "./ProjectGrid";
import { Project } from "../types";

// Mock data for testing
const mockProjects: Project[] = [
  { title: "Project 1", slug: "project-1", apiVersion: 1 },
  { title: "Project 2", slug: "project-2", apiVersion: 1 },
  { title: "Project 3", slug: "project-3", apiVersion: 1 },
];

describe("ProjectGrid Component", () => {
  it("renders a grid of project cards", () => {
    render(<ProjectGrid projects={mockProjects} />);

    // Check that the grid container is rendered
    const gridElement = screen.getByTestId("project-grid");
    expect(gridElement).toBeInTheDocument();

    // Check that the correct number of ProjectCard components are rendered
    const projectCards = screen.getAllByTestId("project-card");
    expect(projectCards.length).toBe(mockProjects.length);

    // Check that each ProjectCard has the correct title
    mockProjects.forEach((project, index) => {
      expect(projectCards[index]).toHaveTextContent(project.title);
    });
  });

  it("applies correct grid styles", () => {
    render(<ProjectGrid projects={mockProjects} />);

    // Check that the grid container has the correct display and gap
    const gridElement = screen.getByTestId("project-grid");
    expect(gridElement).toHaveStyle("display: grid");
    expect(gridElement).toHaveStyle("gap: 16px");

    // Check that grid-template-columns is applied with auto-fit and minmax
    expect(gridElement).toHaveStyle(
      "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"
    );
  });
});
