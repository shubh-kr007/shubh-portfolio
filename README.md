# Shubh's Portfolio

A personal developer portfolio built with **Next.js 14**, **TypeScript**, and **MUI Joy UI**, showcasing my experience, projects, skills, and education.

## 🌐 Live

[**shubh-portfolio.vercel.app**](https://shubh-portfolio.vercel.app)

## ✨ Features

- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Scroll Animations** — Smooth fade-in effects powered by `react-animate-on-scroll`
- **Parallax Sections** — Immersive scrolling experience using `react-parallax`
- **Project Showcase** — Timeline-style display of projects with live demo & GitHub links
- **Experience Timeline** — Professional history with tools and descriptions
- **Skills Grid** — Visual representation of technical skills using `devicons-react`
- **Education Section** — Academic background with timeline
- **Contact Section** — Social links via `react-social-icons`

## 🛠 Tech Stack

| Category     | Technologies                                        |
| ------------ | --------------------------------------------------- |
| **Framework**| Next.js 14, React 18, TypeScript                    |
| **UI**       | MUI Joy UI, Emotion (CSS-in-JS)                     |
| **Animation**| Animate.css, react-animate-on-scroll, react-parallax|
| **Other**    | react-scroll, react-social-icons, devicons-react    |

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/shubh-kr007/shubh-portfolio.git

# Navigate to the project
cd shubh-portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── _components/    # Reusable UI components
│   ├── _sections/      # Page sections (Landing, About, Projects, Skills, Education, Contact)
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── content.ts          # Portfolio content data (experience, education)
├── index.css           # Global styles
└── utils/              # Utility functions
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
