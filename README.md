# Sahil Shaikh Portfolio

A responsive personal portfolio for Sahil Shaikh, a Computer Science undergraduate and software engineering intern candidate. The site presents technical skills, coding profiles, selected projects, resume links, and contact information in an interactive developer-focused experience.

## Features

- Responsive portfolio layout for desktop and mobile screens
- Interactive terminal with portfolio commands
- Technical skills grouped by discipline
- Coding profile cards with achievement statistics
- Selected project showcase with repository links
- Resume preview and download actions
- Copy-to-clipboard email contact action
- GitHub, LinkedIn, and email links
- Production analytics through Vercel Analytics

## Technology stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Lucide React icons
- Vercel Analytics
- pnpm

## Installation

Requirements: Node.js 20 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment variables

This portfolio does not require any application-specific environment variables for local development. Hosting configuration and analytics settings are managed by the deployment environment.

## Usage

Run the development server with:

```bash
pnpm dev
```

Create a production build with:

```bash
pnpm build
pnpm start
```

Portfolio content is maintained in `data/portfolio.ts`. Update that file to change profile details, skills, coding statistics, projects, contact links, or resume URLs.

## Project structure

- `app/` — Next.js routes, layout, metadata, and global styles
- `components/` — portfolio UI and reusable interface components
- `data/` — portfolio content and profile data
- `public/` — static icons and image assets

## License

This project is a personal portfolio for Sahil Shaikh.
