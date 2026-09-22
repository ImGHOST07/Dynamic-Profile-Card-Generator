# Dynamic Profile Card Generator

A simple, vanilla JavaScript web app that lets users fill out a short form and instantly generate a styled profile card — no page reload, no backend, no dependencies.

## Features

- Live card generation from user input (no page refresh)
- Fields for profile picture URL, name, age, occupation, and a short bio
- Multiple cards can be generated and stacked on the page
- Form automatically clears after each submission
- Clean dark-themed UI with rounded card styling

## Demo Flow

1. Enter a profile picture URL, name, age, occupation, and a short "about" blurb.
2. Click **Submit**.
3. A new profile card is generated and appended below the form.
4. The form resets, ready for the next entry.

## Tech Stack

- **HTML5** — form structure and layout
- **CSS3** — dark theme styling, flexbox/inline-block layout, rounded card design
- **Vanilla JavaScript (DOM APIs)** — form handling and dynamic element creation

No frameworks, build tools, or external libraries required.

## Project Structure

```
.
├── index.html      # Page markup and form
├── style.css       # Styling for the form and generated cards
└── script.js       # Form submission logic and card generation
```

## How It Works

- `script.js` listens for the form's `submit` event, prevents the default page reload, and reads the values of all five input fields (via `document.querySelectorAll("input")`).
- It builds a new `<div class="card">` containing:
  - A circular profile picture
  - The name (`<h2>`)
  - Age, only shown if provided (`<h5>`)
  - Occupation (`<p>`)
  - About text (`<p>`)
- The card is appended to the `.main` container, and all input fields are cleared for the next entry.

## Getting Started

No installation needed — it's a static site.

1. Download/clone the three files (`index.html`, `style.css`, `script.js`) into the same folder.
2. Open `index.html` in any modern browser.
3. Start generating cards.

## Known Limitations / Ideas for Improvement

- **Age field** is a plain text input — could be switched to `type="number"` with min/max validation.
- **Profile picture URL** isn't validated — an invalid link will show a broken image icon. A fallback/default avatar could be added.
- **No delete/edit option** for generated cards once created.
- **No persistence** — cards disappear on page refresh (could be added via `localStorage`).
- **No form validation** — empty submissions currently still generate a (mostly blank) card.
- Card layout is fixed-width; could be made responsive with CSS Grid/Flexbox for multi-column layouts on larger screens.

## License

Free to use and modify for personal or commercial projects.