# Orderfy — The all-in-one restaurant platform

A single-page marketing site for **Orderfy**, an all-in-one restaurant management and
ordering platform (online ordering, POS, payments, kitchen display, and delivery).

Built to the **Apple "gallery wall"** style reference (`design.md`): a gallery-white
`#f5f5f7` canvas, enormous weight-700 display headlines with tight negative
letter-spacing, shadow-free cards separated by value alone, 28px card radius, and a
single rationed accent color. That accent — Apple's Azure blue in the reference — is
swapped for the **Orderfy teal** sampled from the brand film (`#0e9aa3`, logo core
`#0096a2`, app accent `#25a3a1`). The hero product stage uses the warm-taupe studio
gradient from the video so the page reads as the film's still companion.

## Run it

Plain static HTML/CSS/JS — no build step. Open `index.html`, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Page markup and all copy |
| `styles.css` | Design-system tokens + every section style |
| `script.js` | Sticky sub-nav active-section tracking + carousel dots |

## Design notes

- **Font:** `Inter` substitutes for SF Pro Display / SF Pro Text per the reference.
- **Color discipline:** teal appears only on the primary CTA, inline links, the logo,
  and inside the in-product app UI — exactly as the reference rations its one accent.
- **Elevation:** content cards carry zero box-shadow; depth is value-only
  (`#ffffff` cards on `#f5f5f7` canvas). The phone and studio stage keep
  film-accurate shadow to read as product photography.
- **Imagery:** the hero phone, app map screen, and menu/feature panels are built in
  pure CSS so the page is self-contained with no external assets.

## Sections

Global nav · sticky product sub-nav · hero (with live-order phone mockup) · intro
statement · ordering · teal delivery showcase · operations 2×2 grid · highlights
carousel · stats · pricing · closing CTA · footer.
