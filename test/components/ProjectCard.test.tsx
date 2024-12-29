import { render, screen, fireEvent } from "@testing-library/react";
import ProjectCard from "../../src/components/ProjectCard";
import { Project } from "../../src/types";

describe("ProjectCard Component", () => {
  const mockProject: Project = {
    title: "Sample Project",
    description: "Sample project description",
    slug: "sample-project",
    apiVersion: 1,
  };

  it("renders the project title", () => {
    render(<ProjectCard {...mockProject} />);
    const titleElement = screen.getByText(mockProject.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the project image with the correct src and alt attributes", () => {
    render(<ProjectCard {...mockProject} />);
    const imageElement = screen.getByAltText(mockProject.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      `project-images/${mockProject.slug}.png`
    );
  });

  it("renders the UI link with the correct URL", () => {
    render(<ProjectCard {...mockProject} />);
    const uiLink = screen.getByText("UI").closest("a");
    expect(uiLink).toHaveAttribute("href", `https://apibr.com/ui/${mockProject.slug}`);
  });

  it("renders the Swagger link with the correct URL", () => {
    render(<ProjectCard {...mockProject} />);
    const swaggerLink = screen.getByText("Swagger").closest("a");
    expect(swaggerLink).toHaveAttribute(
      "href",
      `https://apibr.com/${mockProject.slug}/swagger`
    );
  });

  it("renders the API link with the correct URL and API version", () => {
    render(<ProjectCard {...mockProject} />);
    const apiLink = screen.getByText(`API (v${mockProject.apiVersion})`).closest("a");
    expect(apiLink).toHaveAttribute(
      "href",
      `https://apibr.com/${mockProject.slug}/api/v${mockProject.apiVersion}`
    );
  });

  it("renders the project description", () => {
    render(<ProjectCard {...mockProject} />);
    const descriptionElement = screen.getByText(mockProject.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it("applies hover styles correctly", () => {
    render(<ProjectCard {...mockProject} />);    
    const cardElement = screen.getByRole("img", { name: mockProject.title }).closest("div");
    expect(cardElement).not.toBeNull();
    if (cardElement) {
      const cardElement = screen.getByTestId("project-card"); 
      expect(cardElement).toBeInTheDocument();
      expect(cardElement).not.toHaveStyle("box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2)");
      fireEvent.mouseOver(cardElement);
      expect(cardElement).toHaveStyle("box-shadow: 0 20px 16px rgba(0, 0, 0, 0.2)");
      fireEvent.mouseOut(cardElement);
      expect(cardElement).not.toHaveStyle("box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2)");
    }
  });
});
