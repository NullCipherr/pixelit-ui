# Pixelit UI

A web-based image-to-pixel-art converter built with plain HTML, CSS, and JavaScript.

The core of this repository is the functional app in `demo/`, with a real-time editing and export pipeline. The `landing/` directory is the institutional/commercial layer used to present the product.

## Key features

- Local image upload
- Pixelation with block size control
- Color palette application
- Visual effects (grayscale, invert, sepia, scanlines, brightness, contrast)
- Pixel-focused helpers (crisp pixels and block grid)
- Output dimension controls
- Export formats: `PNG`, `JPEG`, and `WEBP`

## Project structure

```text
.
├── assets/
│   ├── icons/
│   │   └── favicon.ico
│   └── images/
│       ├── sample.png
│       └── hero/
│           ├── Hero-Background.png
│           └── Result.png
├── demo/
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   └── scripts/
│       ├── main.js
│       ├── demo-ui.js
│       └── pixelit.min.js
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── landing/
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   └── scripts/
│       └── main.js
├── index.html           # Redirects to `landing/index.html`
└── README.md
```

## Running locally

1. Clone the repository:

```bash
git clone https://github.com/arcosbr/pixelit-ui.git
cd pixelit-ui
```

2. Open `demo/index.html` in your browser to use the editor.

Optional:
- Open `landing/index.html` to view the institutional/commercial page with CTA to the demo.

## Automatic GitHub Pages deployment

This project already includes a deployment workflow:
- `.github/workflows/deploy-pages.yml`

### How to enable it

1. Go to `Settings` → `Pages`
2. Under `Build and deployment`, select `Source: GitHub Actions`
3. Push to the `master` branch

### Deployment behavior

- The workflow packages `assets/`, `landing/`, `demo/`, and root `index.html` into `dist/`
- It publishes automatically to GitHub Pages
- The root URL redirects to `landing/index.html`

## Recommended usage flow

1. In **Input**, choose an image
2. In **Pixelation**, tune block size and pixel rendering options
3. In **Effects** and **Palette**, refine the final look
4. In **Output**, configure dimensions and file format
5. Download the final image

## Maintenance guidelines

- Keep demo control IDs stable to preserve integration with `demo/scripts/main.js`
- Keep demo styles in `demo/styles/main.css`
- Keep landing styles in `landing/styles/main.css`
- Keep shared images and icons under `assets/`
- Avoid unnecessary dependencies to preserve portability and performance

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the [MIT License](https://github.com/giventofly/pixelit/blob/main/LICENSE).
