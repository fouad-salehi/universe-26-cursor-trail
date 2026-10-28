# Universe 26 Cursor Trail

![Platform](https://img.shields.io/badge/platform-Web-blue)
![Language](https://img.shields.io/badge/language-JavaScript-yellow)
![Styling](https://img.shields.io/badge/styling-CSS3-blue)
![Animation](https://img.shields.io/badge/animation-CSS-orange)
![Dependencies](https://img.shields.io/badge/dependencies-None-green)
![License](https://img.shields.io/badge/license-MIT-green)

## About

Universe 26 Cursor Trail is a lightweight, code-inspired cursor effect that transforms mouse movement into a trail of colorful syntax tiles. Each tile features programming symbols and disappears through a quick animation, shrinking into a tiny dot that matches its original color.

Built with pure HTML, CSS, and JavaScript, the project delivers a visually engaging browser effect without external libraries, frameworks, or additional dependencies.

> [!NOTE]
> **The cursor trail features:**
> - **Grid-Aligned Tiles** — Colorful square tiles arranged on a consistent invisible grid.
> - **Code-Inspired Symbols** — Programming syntax characters such as brackets, operators, and punctuation.
> - **Randomized Disappearance** — Tiles disappear independently to create a more natural trail.
> - **Square-to-Dot Animation** — Each tile shrinks into a small, fading circle before being removed.
> - **Lightweight Implementation** — Built entirely with native web technologies.

## Live Demo

Try Universe 26 Cursor Trail directly in your browser:

[**Open Live Demo**](https://fouad-salehi.github.io/universe-26-cursor-trail/)

## Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/383f3441-5208-49e8-a618-3ffb51c44f02" width="32%" alt="Universe 26 Cursor Trail - Main Preview">
  <img src="https://github.com/user-attachments/assets/469f5e53-7ca9-44a7-9e09-4d0ea52d6f8c" width="32%" alt="Universe 26 Cursor Trail - Cursor Trail Detail">
  <img src="https://github.com/user-attachments/assets/e013d835-21e1-4f26-a2d6-a733824b69fa" width="32%" alt="Universe 26 Cursor Trail - Animation Preview">
</p>

## Technologies

- HTML5
- CSS3
- JavaScript
- CSS Animations
- GitHub Pages

## Features

- Lightweight, browser-based cursor effect
- Colorful programming syntax tiles
- Grid-aligned square placement
- Consistent tile sizing without overlap
- Randomized tile lifetimes
- Animated square-to-dot transitions
- Short, fast-disappearing cursor trail
- No external dependencies
- Reduced-motion preference support
- Modular project structure

## Project Structure

```text
universe-26-cursor-trail/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── cursor-trail.js
├── README.md
├── LICENSE
└── .gitignore
```

## Getting Started

> [!TIP]
> **Run Locally**

1. Clone the repository:

   ```bash
   git clone https://github.com/fouad-salehi/universe-26-cursor-trail.git
   ```

2. Navigate to the project directory:

   ```bash
   cd universe-26-cursor-trail
   ```

3. Open `index.html` in your browser, or run it using a local development server.

No package installation or build process is required.

## Customization

Customize the cursor trail by editing the configuration values in `assets/js/cursor-trail.js`.

| Setting | Description |
|---|---|
| `SIZE` | Controls the grid cell and tile size. |
| `MIN_LIFETIME` | Sets the minimum tile lifetime. |
| `MAX_LIFETIME` | Sets the maximum tile lifetime. |
| `DISSOLVE_DURATION` | Controls the square-to-dot animation duration. |
| `MAX_SQUARES` | Limits the number of active tiles. |
| `SYMBOLS` | Defines the programming characters used in the trail. |
| `COLORS` | Defines the available tile and symbol colors. |

The visual appearance and animation can be adjusted in `assets/css/style.css`.

## Project Goals

- Explore creative cursor interactions using native web technologies.
- Build a lightweight and dependency-free visual effect.
- Demonstrate grid-based positioning and randomized CSS animations.
- Provide a modular codebase that is easy to understand and customize.

## Author

**[Fouad Salehi](https://github.com/fouad-salehi)**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
