# API BR - Catalog

## Purpose
The **API BR - Catalog** project serves as the central catalog page for the [API BR](https://github.com/apibr) project, listing and linking various services available. The catalog is organized by service type and includes the following services:

### Available Services
- **Developer Vacancies**  
  - REST API for accessing developer job vacancies via GitHub repositories.  
  - UI built with React.

- **Sports Agenda**  
  - REST API for retrieving football (soccer) schedules.  
  - UI built with React.

The catalog provides an intuitive, visually appealing user interface for easy navigation and access to the API services.

## Tech Stack
The project is built using the following technologies:
- **Vite**: A modern, fast build tool.
- **React**: JavaScript library for building user interfaces.
- **SWC**: A super-fast TypeScript/JavaScript compiler used for faster builds and optimized development experience.
- **TypeScript**: Strongly typed JavaScript, ensuring type safety across the project.

## How to Build
To build the project, use the following command:
```bash
npm run build
```
This will bundle the project for production and optimize the assets.

## How to Test
The project is set up with **Vitest** for testing. You can run the following commands:

- Run all tests:
  ```bash
  npm run test
  ```

- Run tests with coverage:
  ```bash
  npm run test:coverage
  ```

Vitest will run the tests and display the results, including code coverage.

## Semantic Versioning (SemVer) with GitVersion
This project follows **Semantic Versioning** (SemVer), which ensures that version numbers reflect the nature of changes made to the codebase. The versioning is automatically managed using **GitVersion** version 6.

- **Patch Version**: Incremented for backward-compatible fixes.
- **Minor Version**: Incremented for backward-compatible new features.
- **Major Version**: Incremented for incompatible changes or breaking changes.

GitVersion generates the version number based on commit history and versioning rules. To calculate the version, simply use the following command:
```bash
gitversion
```
This will output the current version based on the repository's Git history.

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/apibr/catalog.git
   ```

2. Navigate to the project folder:
   ```bash
   cd catalog
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
## Pixeebot Activity Dashboard

<img alt="DashList" src="https://docs.pixee.ai/img/pixee_dashlist.png">

👋 This dashboard summarizes Pixeebot's activity on the repository, highlighting available improvement opportunities.

**Recommendations:**
- Last analysis: Feb 09 | Next scheduled analysis: Feb 16

**Note:** The repository's primary language is JavaScript. To enable automatic code fixes, please connect and upload results from a supported code scanning tool (e.g., SonarCloud, SonarQube, CodeQL, Semgrep).
