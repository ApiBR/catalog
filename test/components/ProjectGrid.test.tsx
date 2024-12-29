import { render, screen } from "@testing-library/react";
import ProjectGrid from "../../src/components/ProjectGrid";
import { Project } from "../../src/types";

// Mock data for testing
const mockProjects: Project[] = [
  { title: "Project 1", description: "Project 1 description", slug: "project-1", apiVersion: 1 },
  { title: "Project 2", description: "Project 2 description", slug: "project-2", apiVersion: 1 },
  { title: "Project 3", description: "Project 3 description", slug: "project-3", apiVersion: 1 },
];

describe("ProjectGrid Component", () => {
  it("renders a grid of project cards", () => {
    render(<ProjectGrid projects={mockProjects} />);

    const gridElement = screen.getByTestId("project-grid");
    expect(gridElement).toBeInTheDocument();

    const projectCards = screen.getAllByTestId("project-card");
    expect(projectCards.length).toBe(mockProjects.length);

    mockProjects.forEach((project, index) => {
      expect(projectCards[index]).toHaveTextContent(project.title);
      expect(projectCards[index]).toHaveTextContent(project.description);
    });
  });

  it("applies correct grid styles", () => {
    render(<ProjectGrid projects={mockProjects} />);

    const gridElement = screen.getByTestId("project-grid");
    expect(gridElement).toHaveStyle("display: grid");
    expect(gridElement).toHaveStyle("gap: 16px");
    expect(gridElement).toHaveStyle(
      "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"
    );
  });
});
