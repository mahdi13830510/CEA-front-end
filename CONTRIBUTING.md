
# Contributing to the Computer Engineering Association (CEA) Project

First off, thanks for taking the time to contribute! 🎉  
This document outlines the process for contributing to the project to ensure clean, scalable, and maintainable code.

---

## 📋 Prerequisites

Before you begin, ensure you have:

- [Node.js](https://nodejs.org/) installed (LTS recommended)
- [PNPM](https://pnpm.io/) installed
- A GitHub account

---

## 🚀 Getting Started

### 1. Fork the Repository

> Contributions must be made via **forks** — direct pushes to the main repository are not allowed.

- Go to [the repository](https://github.com/mahdi13830510/CEA-front-end)
- Click on **Fork**
- Clone your fork:

```bash
git clone https://github.com/mahdi13830510/CEA-front-end.git
cd CEA-front-end
pnpm install
````

---

## 🌿 Branching Strategy

All work must be done on a **feature branch** created from `main`:

```bash
git checkout -b feature/your-feature-name
```

Branch names must follow the format:

```
feature/<short-description>
bugfix/<short-description>
chore/<short-description>
```

---

## 📝 Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

### Format:

```
<type>(optional scope): <description>
```

### Example:

```
feat(auth): add login endpoint with JWT support
fix(ui): resolve layout shift on homepage
```

### Accepted Commit Types:

* `feat`: New feature
* `fix`: Bug fix
* `docs`: Documentation changes
* `style`: Code style changes (formatting only, no code changes)
* `refactor`: Code changes that neither fix a bug nor add a feature
* `test`: Adding or updating tests
* `chore`: Maintenance tasks

---

## ✅ Pre-commit Hooks & Linting

This project uses **pre-commit hooks** to ensure code quality.

Install hooks:

```bash
pnpm dlx husky install
```

Make sure your code passes:

```bash
pnpm lint
pnpm format
```

Your code will be automatically checked before commits.

---

## 📦 Submitting a Pull Request (PR)

1. Push your branch to your fork
2. Open a Pull Request against the `main` branch of the original repo
3. Ensure your PR:

   * Has a meaningful title and description
   * Passes all CI checks
   * Is reviewed and approved by a maintainer

---

## 🧪 Code Standards

* Code must be written in **TypeScript**
* Components should be modular and reusable
* Follow the existing **Tailwind CSS** class conventions
* Keep **components**, **hooks**, and **contexts** properly separated

---

## 🙌 Join Us

Whether you're fixing a typo or implementing a new feature, we appreciate all contributions. Let's make this project better together!

---

## 📜 License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).


---
