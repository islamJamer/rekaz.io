# Rekaz.io Cypress Test Automation

## 📌 Project Setup

### 1️⃣ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended: latest LTS version)
- [npm](https://www.npmjs.com/) (Comes with Node.js)

### 2️⃣ Install Dependencies

Run the following command to install all required dependencies:

```sh
npm install
```

## 🚀 Running Cypress Tests

Cypress supports multiple types of tests: API, Unit, and E2E. Use the appropriate command based on your test type.

### **Open Cypress GUI (Interactive Mode)**

- **API Tests**
  ```sh
  npm run cy:open:api
  ```
- **Unit Tests**
  ```sh
  npm run cy:open:unit
  ```
- **E2E Tests**
  ```sh
  npm run cy:open:e2e
  ```

### **Run Cypress Tests in Headless Mode**

- **API Tests**
  ```sh
  npm run cy:run:api
  ```
- **Unit Tests**
  ```sh
  npm run cy:run:unit
  ```
- **E2E Tests**
  ```sh
  npm run cy:run:e2e
  ```

## 📂 Project Structure

```
├── cypress/
│   ├── e2e/                  # E2E test cases
│       ├── api/              # API test cases
│       ├── ui/               # E2E and Unit test cases
│       ├── common/           # Common steps files
│       ├── selectors/        # DOM selectors files
│       ├── utils/            # Test utilities
│   ├── support/              # Support files
│   ├── fixtures/             # Test data files
│   ├── plugins/              # Cypress plugins
│   ├── downloads/            # Files downloaded during tests
│   ├── reports/              # Test reports (if configured)
│
├── package.json              # Project dependencies & scripts
├── README.md                 # Setup and usage instructions
├── tsconfig.json             # TypeScript configuration (if used)
```
