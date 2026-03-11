# Setup Instructions: React + Shadcn + Tailwind + Typescript

If your project does not yet support the requirements for the **Tubelight NavBar**, please follow these steps to initialize your codebase.

## 1. Create a Next.js Project with TypeScript and Tailwind
Run the following command in your terminal and follow the prompts (press Enter for defaults, ensuring you select **Yes** for TypeScript, Tailwind, and App Router):

```bash
npx create-next-app@latest ./ --typescript --tailwind --eslint --app
```

## 2. Initialize Shadcn CLI
The Shadcn CLI sets up the base components, styles, and utility functions (like `cn`).

```bash
npx shadcn@latest init
```

### Why `/components/ui`?
By default, the Shadcn CLI installs primitive components into the `@/components/ui` folder.
- **Organization**: Keeps base UI primitives separate from project-specific logic or complex "feature" components.
- **CLI Compatibility**: The `npx shadcn add [component]` command expects this path to automatically update your components.

If you don't use this folder, you will manually need to manage imports and CLI configurations in `components.json`.

## 3. Install Required Dependencies
The **Tubelight NavBar** requires additional packages for icons and smooth animations:

```bash
npm install lucide-react framer-motion clsx tailwind-merge
```

## 4. Verify Project Structure
Ensure your project has the following key files:
- `/lib/utils.ts`: Contains the `cn` helper for tailwind class merging.
- `/components/ui/`: The destination for the navbar component.
- `tailwind.config.ts`: Configuration for Tailwind CSS.
- `tsconfig.json`: Configuration for TypeScript.

## 5. Integrating the Component
1. Copy `tubelight-navbar.tsx` to `@/components/ui/tubelight-navbar.tsx`.
2. Follow the usage pattern in `NavBarDemo` to pass your navigation items and icons.
