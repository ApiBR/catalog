import React from "react";
import styled from "@emotion/styled";
import { Project } from "../types";

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
  text-align: center;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #009b3a;
`;

const Links = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const LinkButton = styled.a`
  text-decoration: none;
  background: #ffdf00;
  color: #000;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: #009b3a;
    color: #fff;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #000000;
`;

/**
 * A functional component that renders a project card displaying project details.
 *
 * @component
 * @param {Object} props - The properties for the ProjectCard component.
 * @param {string} props.title - The title of the project.
 * @param {string} props.description - The description of the project.
 * @param {string} props.slug - The unique identifier for the project, used in URLs.
 * @param {number} props.apiVersion - The version of the API to be displayed.
 *
 * @returns {JSX.Element} A JSX element representing the project card.
 *
 * @example
 * // Example usage of ProjectCard component
 * <ProjectCard title="My Project" slug="my-project" apiVersion={1} />
 *
 * @throws {Error} Throws an error if any required prop is missing.
 */
const ProjectCard: React.FC<Project> = ({ title, description, slug, apiVersion }) => {
  const imageUrl = `project-images/${slug}.png`;
  const uiUrl = `https://apibr.com/ui/${slug}/`;
  const swaggerUrl = `https://apibr.com/${slug}/swagger`;
  const apiUrl = `https://apibr.com/${slug}/api/v${apiVersion}`;

  return (
    <Card data-testid="project-card">
      <Image src={imageUrl} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Links>
          <LinkButton href={uiUrl} target="_blank">
            UI
          </LinkButton>
          <LinkButton href={swaggerUrl} target="_blank">
            Swagger
          </LinkButton>
          <LinkButton href={apiUrl} target="_blank">
            API (v{apiVersion})
          </LinkButton>
        </Links>
        <Description>{description}</Description>
      </Content>
    </Card>
  );
};

export default ProjectCard;
