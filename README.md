---
title: Docusaurus v3.5 — Complete Guide
description: A comprehensive guide to installing, customising, and deploying a Docusaurus v3.5 website, covering project setup, blog management, documentation structure, theming, and GitHub Pages deployment.
sidebar_label: Docusaurus v3.5 Guide
tags: [docusaurus, documentation, static-site, github-pages, react]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Docusaurus v3.5 — Complete Guide

> **Install · Customise · Deploy**

This guide walks you through everything you need to get a Docusaurus v3.5 website up and running — from a blank terminal to a live site on GitHub Pages. You will learn how to manage blog posts, structure your documentation, customise the theme and landing page, and set up continuous deployment via GitHub Actions.

---

## Table of Contents

1. [What is Docusaurus?](#what-is-docusaurus)
2. [Key Features Out of the Box](#key-features-out-of-the-box)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Project Structure](#project-structure)
6. [Running the Local Development Server](#running-the-local-development-server)
7. [Managing the Blog](#managing-the-blog)
8. [Managing Documentation](#managing-documentation)
9. [Front Matter Reference](#front-matter-reference)
10. [Markdown Features](#markdown-features)
11. [Customising the Theme](#customising-the-theme)
12. [Customising the Landing Page](#customising-the-landing-page)
13. [Static Assets](#static-assets)
14. [The `docusaurus.config.js` File](#the-docusaurusconfigjs-file)
15. [Enabling Only a Blog or Only Docs](#enabling-only-a-blog-or-only-docs)
16. [Adding Search](#adding-search)
17. [Version Control with Git](#version-control-with-git)
18. [Deploying to GitHub Pages](#deploying-to-github-pages)
19. [Troubleshooting](#troubleshooting)
20. [Next Steps](#next-steps)

---

## What is Docusaurus?

Docusaurus is an open-source static-site generator built by Meta, optimised for creating **documentation websites** and **personal/project websites**. Almost all content is written in Markdown, which makes it easy to write and maintain. The landing page and any extra pages that fall outside the standard layout require a small amount of React/JavaScript — everything else is plain Markdown.

Docusaurus v3.5 is the version covered in this guide.

---

## Key Features Out of the Box

| Feature | Details |
|---|---|
| **Landing page** | Pre-built hero banner, feature cards, and footer |
| **Docs section** | Left sidebar, main content, and right in-page navigation |
| **Blog section** | Date-sorted posts, tags, authors, and RSS feed |
| **Light / Dark mode** | Toggleable theme, enabled by default |
| **Anchor links** | Every heading generates a shareable URL fragment |
| **Search** | Pluggable (local search plugin recommended — see [Adding Search](#adding-search)) |
| **Broken-link detection** | Build fails on broken internal links (configurable) |
| **Sitemap generation** | Automatically produced at build time for better SEO |
| **Google Analytics** | Optional tracking ID support in config |

---

## Prerequisites

You need **Node.js** installed on your machine before creating a Docusaurus project.

**Check your Node version:**

```bash
node -v
```

The output should show v18 or higher (v22.x is used in this guide). If Node is not installed, download it from [nodejs.org](https://nodejs.org).

---

## Installation

Navigate to the directory where you want to create your project, then run the Docusaurus scaffolding command:

```bash
# Move to your desired location, e.g. the Desktop
cd ~/Desktop

# Scaffold a new Docusaurus site using the Classic template
npx create-docusaurus@latest my-website classic
```

When prompted, select **JavaScript** as the language.

The command installs all npm dependencies and creates a `my-website/` folder in your chosen location.

:::tip Classic Template
`classic` is the recommended template. It bundles the docs plugin, blog plugin, and a polished landing page out of the box.
:::

---

## Project Structure

```
my-website/
├── blog/                  # Markdown files for blog posts
├── docs/                  # Markdown files for documentation
├── src/
│   ├── components/        # React components used in pages
│   ├── css/
│   │   └── custom.css     # Global CSS overrides (colours, fonts, …)
│   └── pages/
│       └── index.js       # Landing page (React + JSX)
├── static/                # Static assets (images, favicon, …)
├── docusaurus.config.js   # Main configuration file
├── package.json           # Project metadata and dependencies
├── sidebars.js            # Sidebar configuration for docs
└── .gitignore             # Git ignore rules (node_modules, etc.)
```

:::note node_modules
Never commit the `node_modules/` folder. Docusaurus already includes it in `.gitignore`. Dependencies are reinstalled from `package.json` with `yarn install` or `npm install`.
:::

---

## Running the Local Development Server

Open the project in your IDE (VS Code, WebStorm, IntelliJ IDEA, or any other), then run:

```bash
npx docusaurus start
# or, if using yarn:
yarn start
```

The development server starts at `http://localhost:3000`. The page **hot-reloads** automatically whenever you save a file — no manual refresh required.

---

## Managing the Blog

### Blog File Structure

Blog posts can be placed in the `blog/` folder in two ways:

**Simple Markdown file** — best for text-only posts:

```
blog/
└── 2024-09-29-my-post.md
```

**Folder structure** — recommended when a post has images:

```
blog/
└── 2024-09-29-my-post/
    ├── index.md
    └── cover-image.jpg
```

Using a folder keeps each post's assets co-located, making image references straightforward.

---

### Front Matter for Blog Posts

Every blog post starts with a YAML front matter block:

```md
---
slug: my-post           # URL path (optional — auto-generated from folder name if omitted)
title: My Blog Post
authors: [federico]
tags: [docusaurus, tutorial]
---

Post content goes here.
```

:::tip Omit the Slug
It is generally safer to omit `slug` and let Docusaurus derive the URL from the filename or folder name. Manually setting slugs can accidentally produce duplicate URLs.
:::

---

### Adding a New Author

Authors are defined in `blog/authors.yml`:

```yaml
federico:
  name: Federico Tartarini
  title: Researcher
  url: https://github.com/FedericoTartarini
  image_url: https://github.com/FedericoTartarini.png
```

Reference the author key in your post's front matter (`authors: [federico]`).

---

### Adding and Managing Tags

Tags are defined in `blog/tags.yml`:

```yaml
docusaurus:
  label: Docusaurus
  permalink: /docusaurus

tutorial:
  label: Tutorial
  permalink: /tutorial

research:
  label: Research
  permalink: /research
```

Add the tag keys to your post's front matter:

```md
---
tags: [docusaurus, tutorial]
---
```

---

### Truncating Blog Post Previews

On the blog listing page, Docusaurus shows the full content of every post by default. Use the `{/* truncate */}` marker to show only a teaser:

```md
This is the opening paragraph that readers see in the listing.

{/* truncate */}

Everything below this line is hidden in the listing view.
```

---

### Adding Images to Blog Posts

**Same-directory reference (simple .md file):**

```md
![Alt text](./my-image.jpg)
```

**Folder-structure reference:**

```md
![Alt text](./cover-image.jpg)
```

The relative path is always from the markdown file to the image.

---

## Managing Documentation

### Docs File Structure

All documentation lives in the `docs/` folder:

```
docs/
├── intro.md
└── tutorial/
    ├── _category_.json        # Sidebar category config
    ├── 01-basics/
    │   ├── _category_.json
    │   └── getting-started.md
    └── 02-extras/
        ├── _category_.json
        └── advanced-config.md
```

Nesting folders creates collapsible sections in the sidebar.

---

### `_category_.json` — Sidebar Category Configuration

Place a `_category_.json` file inside any folder to configure how that folder appears in the sidebar:

```json
{
  "label": "Tutorial — YouTube",
  "position": 2,
  "collapsed": false,
  "collapsible": true,
  "link": {
    "type": "generated-index"
  },
  "description": "Learn the basics step by step."
}
```

| Field | Purpose |
|---|---|
| `label` | Text displayed in the sidebar |
| `position` | Order relative to sibling items (lower = higher up) |
| `collapsed` | Whether the section is collapsed when the page loads |
| `collapsible` | Whether the user can collapse/expand the section |
| `description` | Summary shown on the generated index page |

---

### Numeric File Naming Convention

Prefix files and folders with numbers to control their order automatically, without needing `position` in every file's front matter:

```
docs/tutorial/
├── 01-introduction.md
├── 02-installation.md
└── 03-configuration.md
```

Docusaurus sorts them numerically.

---

### Adding a New Documentation Page

Create a Markdown file anywhere inside `docs/`. Add a front matter block at the top:

```md
---
sidebar_position: 3
title: My New Page
---

# My New Page

Content goes here.
```

---

## Front Matter Reference

Front matter applies to both **blog posts** and **documentation pages**. Here is a complete reference of commonly used fields:

```md
---
# ── Identification ──────────────────────────────────────────
slug: custom-url-path        # Custom URL (optional)
title: Page Title

# ── Sidebar (docs only) ──────────────────────────────────────
sidebar_label: Short Label   # Label shown in the sidebar
sidebar_position: 2          # Position among siblings

# ── SEO & Social Sharing ─────────────────────────────────────
description: Short description for SEO and social cards
keywords: [docusaurus, guide, seo]
image: ./social-card.png     # Image used when sharing on LinkedIn, Twitter, etc.

# ── Taxonomy ─────────────────────────────────────────────────
tags: [tutorial, docusaurus]

# ── Authors (blog only) ──────────────────────────────────────
authors: [federico]

# ── Visibility ───────────────────────────────────────────────
hide_title: false
hide_table_of_contents: false

# ── Pagination (docs only) ───────────────────────────────────
pagination_label: Next Page
---
```

:::info Social Cards
Setting `image` in the front matter is especially useful for pages you share on LinkedIn or Twitter. The specified image is automatically used as the Open Graph preview image.
:::

---

## Markdown Features

Docusaurus supports standard Markdown plus several MDX extensions. Refer to the [Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features) page for the full list. Key highlights:

### Headings

```md
## Level 2 (shown in right sidebar)
### Level 3 (shown in right sidebar)
#### Level 4 (not shown in right sidebar by default)
```

Headings level 2 and 3 automatically appear in the right-hand table of contents.

### Code Blocks

````md
```javascript title="my-script.js"
const greeting = 'Hello, Docusaurus!';
console.log(greeting);
```
````

### Admonitions

```md
:::tip My Tip
This is a tip admonition.
:::

:::info Information
Informational note.
:::

:::warning Watch Out
Warning admonition.
:::

:::danger Danger
Danger admonition.
:::
```

### Images

```md
<!-- Same directory -->
![Alt text](./image.png)

<!-- From a subfolder -->
![Alt text](./images/diagram.png)

<!-- From the static/ folder -->
![Alt text](/img/logo.svg)
```

### Links

```md
[Internal page](./other-page.md)
[External site](https://docusaurus.io)
```

### Details / Collapsible Sections

```md
<details>
  <summary>Click to expand</summary>

  Hidden content goes here.

</details>
```

---

## Customising the Theme

### Changing the Primary Colour

Open `src/css/custom.css`. The primary colour variables are already defined — simply replace the hex values:

```css
:root {
  /* Light mode */
  --ifm-color-primary: #c0392b;
  --ifm-color-primary-dark: #a93226;
  --ifm-color-primary-darker: #922b21;
  --ifm-color-primary-darkest: #7b241c;
  --ifm-color-primary-light: #cd6155;
  --ifm-color-primary-lighter: #d98880;
  --ifm-color-primary-lightest: #e6b0aa;
  --ifm-code-font-size: 95%;
}

[data-theme='dark'] {
  /* Dark mode — adjust for accessibility contrast */
  --ifm-color-primary: #e74c3c;
  --ifm-color-primary-dark: #cb4335;
  --ifm-color-primary-darker: #b03a2e;
  --ifm-color-primary-darkest: #943126;
  --ifm-color-primary-light: #ec7063;
  --ifm-color-primary-lighter: #f1948a;
  --ifm-color-primary-lightest: #f5b7b1;
}
```

:::warning Contrast Ratios
Always verify that your chosen primary colour passes WCAG contrast checks (aim for AA or AAA) against both white and black backgrounds in both light and dark modes.
:::

---

### Changing the Favicon

1. Visit [favicon.io](https://favicon.io) (text-to-favicon or image upload).
2. Download the generated zip file.
3. Replace `static/img/favicon.ico` with your new file.
4. Restart the dev server (`Ctrl+C`, then `yarn start`) — the browser sometimes caches the old favicon.

---

### Changing the Logo

1. Add your logo file (SVG or PNG) to `static/img/`.
2. Update `docusaurus.config.js`:

```js
themeConfig: {
  navbar: {
    logo: {
      alt: 'My Site Logo',
      src: 'img/my-logo.svg',
    },
  },
},
```

---

## Customising the Landing Page

The landing page is `src/pages/index.js`. It is a standard React component. Key areas to customise:

### Hero Banner Text

Inside `index.js`, find the `HomepageHeader` component and update the title and tagline — or update them in `docusaurus.config.js`:

```js
// docusaurus.config.js
module.exports = {
  title: 'My Website',
  tagline: 'Building great documentation made simple.',
  // ...
};
```

### Feature Cards

Find the `FeatureList` array in `index.js`:

```js
const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>Write docs in Markdown and let Docusaurus do the rest.</>,
  },
  // Duplicate this object to add more feature cards
];
```

### Using Free SVG Illustrations

[undraw.co](https://undraw.co/illustrations) provides free, open-source SVG illustrations. You can even set the accent colour to match your brand before downloading.

1. Choose and download an SVG from undraw.co.
2. Place it in `static/img/`.
3. Import it in `index.js`:

```js
import MySvg from '@site/static/img/my-illustration.svg';
```

### Markdown-Only Landing Page (No React)

If you are unfamiliar with React, you can create a landing page in pure Markdown:

1. Create `src/pages/index.md`.
2. Write standard Markdown.

This page is served at `/` without any React code. It is simpler but less visually flexible.

---

## Static Assets

Place images, icons, and other static files in the `static/` folder. They are served at the root of your site.

```
static/
└── img/
    ├── favicon.ico
    ├── logo.svg
    └── social-card.png   # Used as the default Open Graph image
```

Reference static assets in Markdown with an absolute path from the site root:

```md
![Logo](/img/logo.svg)
```

### Social Card Image

Set the default social card (shown when sharing your homepage URL on LinkedIn, Twitter, etc.) in `docusaurus.config.js`:

```js
themeConfig: {
  image: 'img/social-card.png',
},
```

---

## The `docusaurus.config.js` File

This is the central configuration file for your site. Below are the most important sections:

```js
// docusaurus.config.js
module.exports = {
  title: 'My Website',
  tagline: 'Tagline for my site',
  favicon: 'img/favicon.ico',

  // ── Deployment ──────────────────────────────────────────────
  url: 'https://<your-github-username>.github.io',
  baseUrl: '/<your-repo-name>/',
  organizationName: '<your-github-username>',   // GitHub org or username
  projectName: '<your-repo-name>',              // GitHub repository name
  deploymentBranch: 'gh-pages',

  // ── Build Behaviour ─────────────────────────────────────────
  onBrokenLinks: 'throw',          // 'throw' | 'warn' | 'ignore'
  onBrokenMarkdownLinks: 'warn',

  // ── Internationalisation ────────────────────────────────────
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // Optional: Google Analytics
        gtag: {
          trackingID: 'G-XXXXXXXXXX',
          anonymizeIP: true,
        },
        // Optional: Sitemap
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],

  themeConfig: {
    // Social card image (Open Graph)
    image: 'img/social-card.png',

    navbar: {
      title: 'My Website',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/<your-github-username>',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Tutorial', to: '/docs/intro' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
            { label: 'Twitter', href: 'https://twitter.com/yourhandle' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Name. Built with Docusaurus.`,
    },
  },
};
```

:::important Update These Fields
Before deploying, you **must** update `url`, `baseUrl`, `organizationName`, and `projectName` to match your GitHub username and repository name.
:::

---

## Enabling Only a Blog or Only Docs

### Blog-Only Website

In `docusaurus.config.js`, set `docs: false` and set `blog.routeBasePath` to `'/'`:

```js
presets: [
  [
    'classic',
    {
      docs: false,          // Disable the docs plugin
      blog: {
        routeBasePath: '/', // Serve blog at the site root
      },
    },
  ],
],
```

Also remove any sidebar links to docs from the navbar and footer.

### Docs-Only Website

Set `blog: false` and set `docs.routeBasePath` to `'/'`:

```js
presets: [
  [
    'classic',
    {
      docs: {
        routeBasePath: '/', // Serve docs at the site root
      },
      blog: false,          // Disable the blog plugin
    },
  ],
],
```

Remove blog links from the navbar and footer.

---

## Adding Search

Docusaurus does not ship with a search UI by default; you add it via a plugin. The recommended plugin for local (offline) search is **`@easyops-cn/docusaurus-search-local`**.

### 1. Install the Plugin

```bash
yarn add @easyops-cn/docusaurus-search-local
```

This also creates a `yarn.lock` file, which is required by the GitHub Actions deploy workflow.

### 2. Register the Plugin

In `docusaurus.config.js`, add the plugin before the closing of `module.exports`:

```js
module.exports = {
  // ... existing config ...

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
      },
    ],
  ],
};
```

### 3. Rebuild

```bash
yarn build
yarn serve   # preview the production build locally
```

:::note Search in Development
The search index is only built during `yarn build`. It is **not** available during `yarn start` (the dev server). Test search by running `yarn build && yarn serve`.
:::

---

## Version Control with Git

### Initialise a Local Repository

```bash
cd my-website
git init
```

### Stage and Commit All Files

```bash
git add .
git commit -m "Initial version of the website"
```

The `.gitignore` included by Docusaurus already excludes `node_modules/`, `build/`, and `.docusaurus/`.

### Push to GitHub

Create a new **public** repository on GitHub (do not initialise it with a README — you already have one).

Then push your local repo:

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

---

## Deploying to GitHub Pages

### Overview

GitHub Actions automatically builds and deploys your site every time you push to the `main` branch. The build artifact is pushed to the `gh-pages` branch, which GitHub Pages serves.

### 1. Enable GitHub Pages in Your Repository

In your GitHub repository, go to **Settings → Pages → Build and deployment**, and set the source to **GitHub Actions**.

### 2. Create the Workflow File

Create the following directory structure in your project root:

```
.github/
└── workflows/
    └── deploy.yml
```

Paste this workflow into `deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main   # Change to 'master' if that is your default branch

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: yarn

      - name: Install dependencies
        run: yarn install --frozen-lockfile

      - name: Build website
        run: yarn build

      - name: Upload build artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    name: Deploy to GitHub Pages
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

:::warning Branch Name
Make sure the branch name in the workflow (`main` above) matches the branch you push to in your repository. Older repositories may use `master`.
:::

### 3. Update `docusaurus.config.js`

```js
module.exports = {
  url: 'https://<your-github-username>.github.io',
  baseUrl: '/<your-repo-name>/',
  organizationName: '<your-github-username>',
  projectName: '<your-repo-name>',
  deploymentBranch: 'gh-pages',
  // ...
};
```

### 4. Verify the Build Locally First

Before pushing, always run a local production build to catch errors early:

```bash
yarn build
```

A successful build prints `Process finished with exit code 0`. Fix any broken-link errors before pushing.

### 5. Push and Watch the Action

```bash
git add .
git commit -m "Add GitHub Actions deploy workflow"
git push
```

In your GitHub repository, go to **Actions** and watch the workflow run. Two green checkmarks (Build + Deploy) mean your site is live.

Your site URL will be:

```
https://<your-github-username>.github.io/<your-repo-name>/
```

---

## Troubleshooting

### Broken Links

**Error:** `Error: Docusaurus found broken links!`

**Fix:** Find and correct the links listed in the error output. The `onBrokenLinks: 'throw'` setting in `docusaurus.config.js` makes the build fail on broken links — this is intentional and prevents shipping a site with dead links.

---

### Search Not Working

**Cause:** The search index is only generated at build time.

**Fix:** Run `yarn build && yarn serve` instead of `yarn start`.

---

### Favicon Not Updating

**Cause:** Browser cache.

**Fix:** Stop the dev server, restart it, and perform a hard refresh (`Ctrl+Shift+R` / `Cmd+Shift+R`).

---

### GitHub Actions — `yarn.lock` Missing

**Cause:** The workflow uses `--frozen-lockfile`, which requires `yarn.lock` to exist.

**Fix:** Run `yarn install` locally (adding any plugin via `yarn add` will create the lock file), then commit and push the `yarn.lock` file.

---

### Compilation Error When Toggling Blog/Docs On or Off

**Cause:** Cached build state.

**Fix:** Stop the dev server, delete the `.docusaurus/` folder, and restart with `yarn start`.

---

## Next Steps

### Explore the Official Documentation

The official Docusaurus docs are exceptionally well-written. Start here:

- [Markdown Features](https://docusaurus.io/docs/markdown-features) — admonitions, code blocks, tabs, and more
- [Search](https://docusaurus.io/docs/search) — all available search plugins
- [i18n](https://docusaurus.io/docs/i18n/introduction) — internationalisation and translation support
- [Versioning](https://docusaurus.io/docs/versioning) — maintain multiple versions of your docs
- [Swizzling](https://docusaurus.io/docs/swizzling) — override individual theme components
- [SEO](https://docusaurus.io/docs/seo) — meta tags, sitemaps, canonical URLs
- [Static Site Generation](https://docusaurus.io/docs/advanced/ssg) — advanced rendering concepts

### Useful Tools

| Tool | Purpose |
|---|---|
| [undraw.co](https://undraw.co/illustrations) | Free SVG illustrations (customisable accent colour) |
| [favicon.io](https://favicon.io) | Generate favicons from text or images |
| [Docusaurus Playground](https://docusaurus.io/docs/playground) | Try Docusaurus in the browser |

### Alternative Hosting Platforms

GitHub Pages is used in this guide, but Docusaurus static output can be deployed anywhere:

- **Netlify** — drag-and-drop or Git integration, free tier available
- **Vercel** — zero-config deployment for static sites
- **Cloudflare Pages** — global CDN, generous free tier
- **AWS S3 + CloudFront** — highly scalable, pay-per-use

---

*Documentation generated from the tutorial video "Docusaurus v3.5 Made Easy — Install, Customise, Deploy".*












































[//]: # (# Website)

[//]: # ()
[//]: # (This website is built using [Docusaurus]&#40;https://docusaurus.io/&#41;, a modern static website generator.)

[//]: # ()
[//]: # (## Installation)

[//]: # ()
[//]: # (```bash)

[//]: # (yarn)

[//]: # (```)

[//]: # ()
[//]: # (## Local Development)

[//]: # ()
[//]: # (```bash)

[//]: # (yarn start)

[//]: # (```)

[//]: # ()
[//]: # (This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.)

[//]: # ()
[//]: # (## Build)

[//]: # ()
[//]: # (```bash)

[//]: # (yarn build)

[//]: # (```)

[//]: # ()
[//]: # (This command generates static content into the `build` directory and can be served using any static contents hosting service.)

[//]: # ()
[//]: # (## Deployment)

[//]: # ()
[//]: # (Using SSH:)

[//]: # ()
[//]: # (```bash)

[//]: # (USE_SSH=true yarn deploy)

[//]: # (```)

[//]: # ()
[//]: # (Not using SSH:)

[//]: # ()
[//]: # (```bash)

[//]: # (GIT_USER=<Your GitHub username> yarn deploy)

[//]: # (```)

[//]: # ()
[//]: # (If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.)
