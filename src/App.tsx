import React from 'react';
import ProjectGrid from './components/ProjectGrid';
import Header from './components/Header';
import Footer from './components/Footer';
import projectsData from './projects.json'; // Import the JSON file
import { Project } from './types';

const projects: Project[] = projectsData;

const App: React.FC = () => (
  <>
    <Header />
    <ProjectGrid projects={projects} />
    <Footer />
  </>
);

export default App;
