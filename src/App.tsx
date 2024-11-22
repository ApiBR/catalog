import React from 'react';
import ProjectGrid from './components/ProjectGrid';
import Header from './components/Header';
import Footer from './components/Footer';
import projectsData from './projects.json'; // Import the JSON file
import { Project } from './types';

const projects: Project[] = projectsData;

/**
 * The main application component that serves as the entry point for the React application.
 * It renders the Header, ProjectGrid, and Footer components.
 *
 * @component
 * @returns {JSX.Element} The rendered application component containing the header, project grid, and footer.
 *
 * @example
 * // Usage of the App component
 * ReactDOM.render(<App />, document.getElementById('root'));
 */
const App: React.FC = () => (
  <>
    <Header />
    <ProjectGrid projects={projects} />
    <Footer />
  </>
);

export default App;
