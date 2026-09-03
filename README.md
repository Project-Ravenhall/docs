# Ravenhall Documentation

This directory contains the documentation for **Ravenhall**, a modern, self-hosted library for your books. 

The documentation is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Getting Started

To run the documentation site locally during development:

```bash
# Install dependencies
npm install

# Start the development server
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Building for Production

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static hosting service.

## Structure
- `docs/`: Contains all the Markdown (`.md` / `.mdx`) files for the documentation.
- `src/`: Contains React components, pages (like the landing page), and custom CSS.
- `static/`: Contains static assets like images (`img/`).
- `docusaurus.config.ts`: The central configuration file for the site (Navbar, Footer, Themes, etc.).
