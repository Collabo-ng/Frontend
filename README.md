# Shop Together, Save Individually: [Collabo](collabo-rust.vercel.app/)

This is a [Next.js](https://nextjs.org) project, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). The platform allows users to share online shopping carts and split delivery fees, providing a collaborative shopping experience.

## 🚀 Getting Started

To get the development server running, execute one of the following commands in your terminal:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action. You can start editing by modifying `app/page.tsx`. Any changes will automatically reflect in the browser.

## 📂 Branching Strategy

We follow a 7-branch structure based on industry standards to ensure smooth development and deployment processes:

- **master**: Main production branch.
- **development**: Active development branch where new features are integrated.
- **features**: Feature-specific branches created off `development` (e.g., `features/sharing-cart`).
- **bugfix**: Branch for quick fixes on `development` or `release`.
- **hotfix**: Branch for urgent fixes on `master`.
- **experimental**: Branch for experimental features or testing ideas.
- **release**: Pre-production branch for final testing before merging into `master`.

### Branch Workflow

1. **Feature Development**:
    - Create a new branch from `development`:

      ```bash
      git checkout -b features/<your-feature-name>
      ```

    - Work on the feature and commit changes:

      ```bash
      git add .
      git commit -m "feat: add <feature description>"
      ```

    - Push to the repository:

      ```bash
      git push origin features/<your-feature-name>
      ```

2. **Bug Fixes**:
    - For bug fixes, create a branch from `development`:

      ```bash
      git checkout -b bugfix/<issue-name>
      ```

    - After fixing the issue, push the changes:

      ```bash
      git add .
      git commit -m "fix: <bug description>"
      git push origin bugfix/<issue-name>
      ```

3. **Releasing**:
    - After testing in the `release` branch, merge into `master` for production deployment:

      ```bash
      git checkout master
      git merge release
      ```

## 🛠️ Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) to maintain a clean commit history:

- **feat**: A new feature.
- **fix**: A bug fix.
- **docs**: Documentation updates.
- **style**: Code formatting, no logic change.
- **refactor**: Code changes that neither fix bugs nor add features.
- **test**: Adding or updating tests.
- **chore**: Maintenance tasks like updating build tools or dependencies.

Example:

```bash
git commit -m "feat: add cart sharing functionality"
```

## 🔗 Quick Links

- [Company Website](#) (Coming Soon)
- [Documentation](#) (In Progress)
- [API Reference](#) (In Progress)
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## 💬 Communication & Support

- **[Discord](https://discord.gg/r42HMyNUny)**: Join our community for discussions, support, and updates.
- **[Slack](#)**: Internal team collaboration and project management.(Coming Soon)

## 📦 Deploy on Vercel

We recommend deploying your application on [Vercel](https://vercel.com/new) for the best Next.js experience. For more details, visit the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

