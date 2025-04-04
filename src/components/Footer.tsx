import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  font-size: 0.9rem;
  text-align: center;
  margin: 16px 8px;
  color: #333;
  position: relative; /* Default relative position */
  bottom: 0;
  width: 100%;
  background-color: #f9f9f9;

  @media (min-height: 100vh) {
    position: fixed; /* Sticks to the bottom if content doesn't fill the page */
  }
  a {
    color: #009b3a; /* Green link */
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .image-rounded {
    border-radius: 50%;
    width: 24px;
    height: 44px;
    vertical-align: middle;
    margin-left: 4px;
    margin-right: 4px;
  }
  svg {
    width: 24px;
    height: 44px;
    vertical-align: middle;
    fill: #333;
    margin-right: 4px;
  }
`;

/**
 * Footer component that displays the developer's information and links.
 *
 * This functional component renders a footer section containing:
 * - Developer's name with a link to their profile.
 * - An image representing the developer.
 * - A link to the project's GitHub repository.
 *
 * The component uses React.FC type for functional components in TypeScript.
 *
 * @returns {JSX.Element} The rendered footer component.
 *
 * @example
 * // Usage in a React application
 * import Footer from './Footer';
 *
 * function App() {
 *   return (
 *     <div>
 *       <Footer />
 *     </div>
 *   );
 * }
 */
const Footer: React.FC = () => (
  <FooterContainer>
    Developed by{' '}
    <a
      href="https://guibranco.github.io/?utm_campaign=project&utm_media=api-br-catalog&utm_source=apibr.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://guibranco.github.io/photo.png"
        alt="Guilherme Branco Stracini"
        className="image-rounded"
        loading="lazy"
      />
    </a>
    <a
      href="https://guibranco.github.io/?utm_campaign=project&utm_media=api-br-catalog&utm_source=apibr.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Guilherme Branco Stracini
    </a>{' '}
    | Repository{' '}
    <a href="https://github.com/ApiBR/catalog" target="_blank" rel="noopener noreferrer">
      <svg height="32px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
      </svg>
    </a>
    <a href="https://github.com/ApiBR/catalog" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
  </FooterContainer>
);

export default Footer;
