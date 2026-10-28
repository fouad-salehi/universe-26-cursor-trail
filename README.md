# Universe 26 Cursor Trail

![Platform](https://img.shields.io/badge/platform-Web-blue)
![Language](https://img.shields.io/badge/language-JavaScript-yellow)
![Styling](https://img.shields.io/badge/styling-CSS3-blue)
![Animation](https://img.shields.io/badge/animation-CSS-orange)
![Dependencies](https://img.shields.io/badge/dependencies-None-green)
![License](https://img.shields.io/badge/license-MIT-green)

## About

Universe 26 Cursor Trail is a lightweight, code-inspired cursor effect that transforms mouse movement into a trail of colorful syntax tiles. Each tile features programming symbols and disappears through a quick animation, shrinking into a tiny dot that matches its original color.

Built with pure HTML, CSS, and JavaScript, the project delivers a simple and visually engaging browser effect without external libraries, frameworks, or additional dependencies.

> [!NOTE]
> **The cursor trail features:**
> - **Grid-Aligned Tiles** — Colorful square tiles arranged on a consistent invisible grid.
> - **Code-Inspired Symbols** — Programming syntax characters such as brackets, operators, and punctuation.
> - **Randomized Disappearance** — Tiles disappear independently to create a more natural trail.
> - **Square-to-Dot Animation** — Each tile shrinks into a small, fading circle before being removed.
> - **Lightweight Implementation** — Built entirely with native web technologies.

## Preview

The cursor trail generates colorful programming-symbol tiles as the pointer moves across the page. Tiles remain briefly visible before shrinking and fading away at different times.

## Technologies

- HTML5
- CSS3
- JavaScript
- CSS Animations
- GitHub

## Features

- Lightweight, browser-based cursor effect
- Colorful programming syntax tiles
- Grid-aligned square placement
- Consistent tile sizing without overlap
- Randomized tile lifetimes
- Animated square-to-dot transitions
- Fast disappearance and short cursor trail
- No external dependencies
- Reduced-motion preference support
- Simple and modular project structure

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

2. Open the project directory:

   ```bash
   cd universe-26-cursor-trail
   ```

3. Open `index.html` in your browser, or use a local development server.

No package installation or build process is required.

## Customization

The cursor trail can be customized by editing the configuration values in `assets/js/cursor-trail.js`.

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
- Create a clean, lightweight, and dependency-free visual effect.
- Demonstrate grid-based positioning and randomized CSS animations.
- Provide a modular codebase that is easy to understand and customize.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
