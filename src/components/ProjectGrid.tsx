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

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => (
  <Grid>
    {projects.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </Grid>
);

export default ProjectGrid;
