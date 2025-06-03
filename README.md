
# Computer Engineering Association (CEA)

A modern web application developed for the **Computer Engineering Association (CEA)** of the University of Tabriz. This platform aims to centralize resources, events, and announcements relevant to students and faculty in the Computer Engineering department.

---

## Table of Contents

- [Computer Engineering Association (CEA)](#computer-engineering-association-cea)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Development Server](#development-server)
    - [Production Build](#production-build)
  - [Project Structure](#project-structure)
  - [Development Tools](#development-tools)
  - [Contributing](#contributing)
  - [License](#license)
  - [Maintained By](#maintained-by)

---

## Introduction

This project serves as a portal for the Computer Engineering Association, providing a centralized platform for communication, announcements, and collaboration within the department. Built with modern frontend technologies to ensure scalability, responsiveness, and a developer-friendly experience.

---

## Features

- Built with **Next.js** and **TypeScript**
- Styling via **Tailwind CSS**
- Component-based design for reusability
- Custom hooks and context providers
- Pre-commit hooks for code quality
- Optimized performance and SEO
- Ready for open-source contributions

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: PNPM
- **Linting/Formatting**: ESLint, Prettier, pre-commit hooks
- **Configuration**: `next.config.mjs`, `tsconfig.json`, `tailwind.config.ts`

---

## Installation

> Make sure you have [Node.js](https://nodejs.org/) and [PNPM](https://pnpm.io/) installed.

```bash
git clone https://github.com/mahdi13830510/CEA-front-end.git
cd CEA-front-end
pnpm install
````

---

## Usage

### Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

### Production Build

```bash
pnpm build
pnpm start
```

---

## Project Structure

```
├── app/                  # Next.js app directory (routes, layouts)
├── components/           # Reusable components
├── hooks/                # Custom React hooks
├── contexts/             # React context providers
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Global styles (e.g., Tailwind)
├── package.json          # Project metadata and scripts
├── pnpm-lock.yaml        # PNPM lockfile
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
```

---

## Development Tools

* **Pre-commit Hooks**: Ensures code is linted and formatted before each commit.
* **ESLint** & **Prettier**: Enforce code style and consistency.
* **Type Checking**: TypeScript for safer code.

To install pre-commit hooks:

```bash
pnpm dlx husky install
```

> Note: Make sure `husky` and related tools are listed in `package.json`.

---

## Contributing

This project is open-source and welcomes contributions!
For Contribution refer to [Contribution](CONTRIBUTING.md)

1. Fork the repository
2. Create a new branch: `git checkout -b feature/my-feature`
3. Make your changes and commit them
4. Push to your fork and submit a pull request

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Maintained By

Computer Engineering Association
University of Tabriz


---

