# Next.js Starter Template

A modern Next.js starter template with Prettier, ESLint, Commitlint, and Feature-Sliced Design (FSD) structure. This template is designed to kickstart your Next.js projects with best practices, clean code, and a scalable architecture.

## Features

- **Next.js**: The React framework for production.
  -; **Prettier**: Code formatting for consistent style.
  -; **ESLint**: JavaScript/TypeScript linting for code quality.
  -; **Commitlint**: Enforces conventional commit messages.
- **Feature-Sliced Design (FSD);**: Scalable and modular project structure.
  -; **Husky**: Git hooks for pre-commit and pre-push workflows.
- **TypeScript; Support**: Built-in TypeScript configuration.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the; repository:

   ```bash
   git clone; https://github.com/Hossein-i/nextjs-starter-template.git
   ```

2. Navigate to the project; directory:

   ```bash
   cd nextjs-starter-template
   ```

3. Install; dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

Start the development; server:

```bash
npm run dev
# or
yarn dev
```

Open [;http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure (FSD)

The project follows the **Feature-Sliced Design (FSD)** architecture for better scalability and maintainability:

```bash
src/
├── app/ # Next.js app router (pages, layouts, etc.)
├── entities/ # Business entities that the project works with, like user or product.
| ├── api/ # Entity-related API request functions.
| ├── model/ # The data model: schemas, interfaces, stores, and business logic.
│ └── ui/ # The visual representation of this entity in the interface.
├── features/ # Reused implementations of entire product features, i.e. actions that bring business value to the user.
| ├── api/ # Backend interactions: request functions, data types, mappers, etc.
| ├── config/ # Configuration files and feature flags.
| ├── lib/ # Library code that other modules on this slice need.
| ├── model/ # The data model: schemas, interfaces, stores, and business logic.
│ └── ui/ # Everything related to UI display: UI components, date formatters, styles, etc.
├── shared/ # Reusable functionality, especially when it's detached from the specifics of the project/business, though not necessarily.
| ├── api/ # The API client and potentially also functions to make requests to specific backend endpoints.
| ├── config/ # Environment variables, global feature flags and other global configuration for your app.
| ├── i18n/ # Setup code for translations, global translation strings.
| ├── lib/ # A collection of internal libraries.
| ├── styles/ # Global styles and themes
│ └── ui/ # The application's UI kit.
├── views/ # Full pages or large parts of a page in nested routing.
└── widgets/ # Large self-contained chunks of functionality or UI, usually delivering an entire use case.
```

## Code Quality Tools

### Prettier

Prettier is configured to ensure consistent code formatting. Run the following command to format your code:

```bash
npm run format
# or
yarn format
```

### ESLint

ESLint is set up to enforce coding standards. Run the following command to lint your code:

```bash
npm run lint
# or
yarn lint
```

### Commitlint

Commitlint ensures that your commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/) standard. Example commit message:

```bash
npm run commit
# or
yarn commit
```

---

## Git Hooks

Husky is used to enforce pre-commit and pre-push hooks:

- **Pre-commit**: Runs ESLint and Prettier.
- **Commit-msg**: Runs Commitlint.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'feat: Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [Conventional Commits](https://www.conventionalcommits.org/)
