# Pose-aware Human–Humanoid Collaboration in Construction

Project page for **Pose-aware human–humanoid collaboration in construction**.

Yanxi Liu<sup>1</sup>, Houtan Jebelli<sup>2</sup>, Yizhi Liu<sup>1,\*</sup>

<sup>1</sup>Department of Civil and Environmental Engineering, Syracuse University
<sup>2</sup>Department of Civil and Environmental Engineering, University of Illinois Urbana–Champaign

<sup>\*</sup>Corresponding author: yliu580@syr.edu

## Figures

Source vector figures live in `static/figures-src/`; the web versions are rendered from them.

| Web file | Source | Used for |
|---|---|---|
| `static/images/system_overview.png` (1954x772) | `Fig1.pdf` | Teaser |
| `static/images/scenario_transportation.jpg` (1899x973) | `Fig7.pdf`, panel A | Experiment Scenarios |
| `static/images/scenario_panel.jpg` (1899x972) | `Fig7.pdf`, panel B | Experiment Scenarios |

`Fig7.pdf` is a single two-panel figure; it is split at the white gap between panels (rows
973–996 of the 1899x1969 render) so each scenario gets its own heading and caption on the page.

Mostly-vector figures are saved as PNG; photo-heavy ones as JPEG (Fig7 is 3.9 MB as PNG vs 0.9 MB
as JPEG at quality 88, with no visible loss in the labels).

To regenerate after editing a PDF (needs `brew install poppler imagemagick`):

```
pdftoppm -png -r 150 static/figures-src/Fig1.pdf /tmp/fig && magick /tmp/fig-1.png -trim +repage -resize 1954x static/images/system_overview.png
```

**Watch out:** `Fig1.pdf`'s CropBox is smaller than the artwork, so any tool that renders the
CropBox (macOS `sips`, Preview, Quick Look) clips panel A on the left and the bottom row of
scenario images. Render the **MediaBox** instead — `pdftoppm` does this by default, and only
switches to the CropBox if you pass `-cropbox`. Both committed images are MediaBox renders,
auto-trimmed of their white margins.

Optional figures — each has a commented-out `<img>` block in `index.html`; drop the file in
`static/images/` and uncomment it:

| File | Used for |
|---|---|
| `pose_assessment.png` | BRACE-Net architecture |
| `framework.png` | Teacher–student–adaptation RL framework |
| `favicon.svg` | Browser tab icon (currently still the template's) |

## Still to fill in

- Paper PDF and arXiv links (currently `#` placeholders in `index.html`)
- BibTeX venue and year

## Local preview

```
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Website License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

Built on the [Nerfies](https://github.com/nerfies/nerfies.github.io) project page template.
