# Max Belich - Portfolio

Personal portfolio website showcasing my projects, skills, and experience as a developer.

**Live:** https://maxbelich.de

![Portfolio preview](public/images/preview.png)

## Tech Stack

- Angular 22 (standalone components, signals)
- TypeScript
- SCSS
- ngx-translate (EN/DE)
- Vitest (unit tests)

## Features

- Responsive portfolio with projects, skills, and testimonials
- Multi-language support (English/German)
- Contact form (PHP mail backend)
- Legal notice & privacy policy pages
- Automatic deployment to Hetzner via GitHub Actions (SFTP) on push to `main`

## Getting Started

Clone the repository and start the local development server:

```bash
git clone https://github.com/maxbelich/Portfolio-Max-Belich.git
cd Portfolio-Max-Belich
npm install
npm start
```
Then open:
```bash
http://localhost:4200
```
## Project Structure

```text
src/app/
├── layout/  # header, footer
├── pages/   # home, legal-notice, privacy-policy
└── shared/  # components, data, interfaces, services
```

## License

© 2026 Max Belich. All rights reserved.
