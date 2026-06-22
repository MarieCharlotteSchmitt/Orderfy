# Nightwell — Indie Game Studio Website

A single-page marketing site for a fictional independent game studio, built to the
**Revolut** style reference (`design.md`): a strict achromatic palette, cinematic
full-bleed hero/feature sections, geometric display type with tight negative
letter-spacing, pill-shaped buttons, and an intentionally flat (shadow-free) look.

## Run it

It's plain static HTML/CSS/JS — no build step. Open `index.html` directly, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Page markup and content |
| `styles.css` | Design-system tokens + all section styles |
| `script.js` | Header light/dark swap on scroll |

## Design notes

- **Fonts:** `Sora` substitutes for Aeonik Pro (geometric, condensed display face); `Inter` for body — both loaded from Google Fonts.
- **Palette:** restricted to white / off-white / black / near-black per the brief; color comes only from photography.
- **Imagery:** cinematic Unsplash photos sit over gradient fallbacks, so heroes still look right if images fail to load.
- **Layout:** full-bleed heroes alternating with centered 1200px content blocks, with generous 96px section gaps.

## Sections

Hero · social proof / awards · featured game (Hollow Tide) · game collection ·
studio · how-we-build pillars · journal · wishlist CTA · footer.
