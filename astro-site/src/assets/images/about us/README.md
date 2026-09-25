# About Us photo

`AboutUsMain.png` is the photo shown beside the "About N.D.I." panel on the
Home page. It's fixed: adding or reordering gallery photos never changes it,
and it doesn't appear in the Projects gallery.

To change it, replace `AboutUsMain.png` with your new photo using **exactly
the same filename** (including the `.png` extension). No code changes are
needed. The site resizes and compresses it automatically.

If your new photo is a `.jpg` or other format, either convert it to `.png`
or ask a developer to update the filename in
`../../../components/home/AboutPreviewSection.astro`. A wrong or missing
filename stops the site from building.

The photo is cropped to fill its panel, so keep the main subject near the
centre.

This file itself isn't a photo, so it's ignored.
