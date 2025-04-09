import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectCard } from '../../src/components/ProjectCard';

const mockProject = {
  title: "Test Project",
  description: {
    'pt-BR': "Descrição de Teste",
    'en-US': "Test Description",
    'es-ES': "Descripción de Prueba"
  },
  slug: "test-project",
  apiVersion: 1
};

describe('ProjectCard', () => {
  it('renders project information', () => {
    render(<ProjectCard project={mockProject} language="en-US" />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders project information in Portuguese', () => {
    render(<ProjectCard project={mockProject} language="pt-BR" />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Descrição de Teste')).toBeInTheDocument();
  });

  it('renders project information in Spanish', () => {
    render(<ProjectCard project={mockProject} language="es-ES" />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Descripción de Prueba')).toBeInTheDocument();
  });

  it('renders all action links', () => {
    render(<ProjectCard project={mockProject} language="en-US" />);
    expect(screen.getByText('Open UI')).toBeInTheDocument();
    expect(screen.getByText('View API')).toBeInTheDocument();
    expect(screen.getByText('Swagger UI')).toBeInTheDocument();
  });

  it('renders project image with correct path', () => {
    render(<ProjectCard project={mockProject} language="en-US" />);
    const img = screen.getByAltText('Test Project');
    expect(img).toHaveAttribute('src', '/project-images/test-project.png');
  });
});