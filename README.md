# 📚 API BR – Catalog

[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/apibr/catalog/ci-cd.yml?label=CI%2FCD&logo=github&style=flat-square)](https://github.com/apibr/catalog/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📌 Purpose

**API BR – Catalog** is the central hub for the [API BR](https://github.com/apibr) project. It provides a clean, user-friendly interface listing the available public services in the ecosystem. Services are grouped by category and link directly to their respective repositories.

### 🔗 Available Services

- **Banks Directory**
  REST API to access Brazilian Banks List from [![GuiBranco/BancosBrasileiros](https://img.shields.io/badge/GuiBranco%2FBancosBrasileiros-black?style=flat&logo=github)](https://github.com/GuiBranco/BancosBrasileiros).
  Web UI built with React.

- **Developer Vacancies**  
  REST API to access developer job vacancies from GitHub repositories.  
  Web UI built with React.

- **Sports Agenda**  
  REST API that provides football (soccer) match schedules.  
  Web UI built with React.

---

## 🛠️ Tech Stack

This project is built with the following technologies:

- **Vite** – Lightning-fast build tool for modern frontends
- **React** – Component-based JavaScript library for building UIs
- **SWC** – Super-fast JS/TS compiler used by Vite
- **TypeScript** – Type-safe JavaScript for scalable and reliable code

---

## 🚀 Getting Started

### 🔧 Installation

To set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/apibr/catalog.git
   ```

2. Navigate into the project folder:

   ```bash
   cd catalog
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## 🏗️ Build

To create a production-ready build:

```bash
npm run build
```

This will generate an optimized bundle in the `dist/` folder.

---

## 🧪 Testing

This project uses [**Vitest**](https://vitest.dev/) for unit testing.  
Use the following commands:

- Run all tests:

  ```bash
  npm run test
  ```

- Run tests with coverage:
  ```bash
  npm run test:coverage
  ```

Vitest will output test results and code coverage directly in the terminal.

---

## 🔢 Versioning

This project follows **Semantic Versioning (SemVer)** and uses [**GitVersion v6**](https://gitversion.net/) for automated version calculation.

### Version Rules

- **Patch** – Backward-compatible bug fixes
- **Minor** – Backward-compatible features
- **Major** – Breaking or incompatible changes

To calculate the current version, run:

```bash
gitversion
```

This will output the version based on your Git history and tagging strategy.

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for full details.
