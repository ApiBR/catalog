import React from "react";
import styled from "@emotion/styled";
import ProjectCard from "./ProjectCard";
import { ProjectGridProps } from "../types";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  padding: 16px;
`;

/**
 * A functional component that renders a grid of project cards.
 *
 * @param {ProjectGridProps} props - The properties for the ProjectGrid component.
 * @param {Array<Project>} props.projects - An array of project objects to be displayed in the grid.
 *
 * @returns {JSX.Element} A React element representing the grid of project cards.
 *
 * @example
 * const projects = [
 *   { title: 'Project 1', description: 'Description 1' },
 *   { title: 'Project 2', description: 'Description 2' }
 * ];
 *
 * <ProjectGrid projects={projects} />
 *
 * @throws {Error} Throws an error if the projects prop is not an array.
 */
const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => (
  <Grid>
    {projects.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </Grid>
);

export default ProjectGrid;
