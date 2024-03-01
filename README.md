![License](https://img.shields.io/badge/license-MIT-blue)

# Food Tech Frontend challenge

Welcome to the Food Tech frontend challenge! Dive into the realm where culinary meets code. The task? Build a menu builder for the digital age, tailored for a renowned food delivery company in Brazil.

To set up and run the project on your local machine, follow the instructions provided below.

## 🤖 Tech stack

Here's a breakdown of the core technologies and libraries used:

- **[React](https://reactjs.org/)**: A popular JavaScript library for building dynamic and responsive user interfaces.
- **[Vite](https://vitejs.dev/)**: Fast and simple build tool for the web.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom designs with an emphasis on responsiveness and maintainability.
- **[Zustand](https://github.com/pmndrs/zustand)**: A minimal, yet powerful state management solution for React applications.
- **[Prettier](https://prettier.io/)**: An opinionated code formatter that supports multiple languages and integrates with most editors.
- **[ESLint](https://eslint.org/)**: A powerful tool for identifying and fixing problems in JavaScript code, ensuring code quality and consistency.
- **[Testing Library](https://testing-library.com/)**: A set of utilities that allow you to test UI components in a user-centric way.
- **[Vitest](https://vitest.dev/)**: A next generation testing framework powered by Vite
- **[Playwright](https://playwright.dev/)**: Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.

To maintain high code quality and ensure that all tests pass, we use GitHub Actions for automated testing. This integration streamlines our development process, allowing for more efficient and effective testing workflows.

## ⚒️ Prerequisites

Before starting, ensure you meet the following requirements:

- **Node.js (v18 or higher)**: The project requires Node.js version 18 or higher. If you haven't installed it yet or need to upgrade, visit the [Node.js download page](https://nodejs.org/).
- **npm (Node Package Manager)**: npm is utilized to manage the project's dependencies. It comes bundled with Node.js. You can check your npm version by running `npm -v` in your terminal.
- **bun**: (optional) As an efficient alternative to npm, Yarn and pnpm, this project supports [bun](https://bun.sh/), known for its speed and efficiency in handling packages. Follow the instructions on the bun website for installation and usage.
- **A Code Editor**: Use a code editor like [Visual Studio Code](https://code.visualstudio.com/) (preferable), [Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/) or why not [Adobe Dreamweaver](https://www.adobe.com/br/products/dreamweaver.html) ([remember that?](https://en.wikipedia.org/wiki/Adobe_Dreamweaver)) for an enhanced development experience.

## 🚀 Installation and Running Instructions

Getting this project up and running on your local machine.

### 1 - Download and Install Dependencies

**Clone the Repository**: First, clone the repository to your local machine. Open your terminal and run the following command:

```bash
git clone https://github.com/johanguse/food-menu-frontend-challenge.git
```

**Navigate to the Project Directory**: After cloning, move into the project directory with this command:

```bash
cd food-menu-frontend-challenge
```

**Install Dependencies**: Finally, install all necessary dependencies. You can use pnpm, but npm or yarn are also compatible. Execute one of the following commands:

```bash
bun install  # You can also use npm, yarn or pnpm if you prefer
```

### 2 - Running the Development Server

After successfully installing the dependencies, you're ready to launch the development server. Follow these steps to get it running on your local machine:

**Start the Development Server**: To initiate the server, open your terminal and execute the following command:

```bash
bun run dev  # You can also use npm, yarn or pnpm if you prefer
```

This command fires up the Next.js development server.

**Accessing the Server**: By default, the server will be accessible at [http://localhost:5173](http://localhost:5173). You can use this URL to view your application in a web browser.

Note: The default port (5173) can be modified in the project settings if necessary.

## 🧪 Test

Before run the test make sure you already have installed the Playwright browsers.

```bash
bun run playwright install  # You can also use npm, yarn or pnpm if you prefer
```

We have included both unit and end-to-end tests for this project. You can run the tests using the following commands:

```bash
bun run test  # You can also use npm, yarn or pnpm if you prefer
```

Or you can run individual tests:

Run Unit Tests:

```bash
bun run test:unit # You can also use npm, yarn or pnpm if you prefer
```

Run End-to-End Tests:

```bash
bun run test:e2e # You can also use npm, yarn or pnpm if you prefer
```

## 🏵️ Extra

We use ESLint and Prettier to ensure code quality and consistency. You can run the linting and formatting checks using the following command:

```bash
bun run lint  # You can also use npm, yarn or pnpm if you prefer
```

## 📝 License

This project is licensed under the MIT License.
