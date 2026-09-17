# incidentcmdr.com

Marketing site for CMDR — incident response built for hospital IT.

Plain static HTML, CSS and one small JavaScript file. No build step, no
dependencies, no framework. Open a page in a browser, or serve the directory:

```sh
python3 -m http.server 8000
```

## Layout

```
*.html                  one file per page
assets/css/styles.css   design tokens and all components
assets/js/main.js       mobile nav and FAQ accordions (progressive enhancement)
assets/img/             figures — see assets/img/README.md
```

The header and footer are duplicated in each page. That is deliberate: it keeps
the site buildless. Edit one, edit all — there are eight pages.

`assets/js/main.js` only enhances. With JavaScript off, every accordion panel
is open, the nav is visible at desktop widths, and every link works.

## Before publishing

**Read [NOTES.md](NOTES.md) first.** It records what changed and why, and lists
four blocking items: BCH name and logo permission, the team bios, the legal
pages, and the demo form's `action`. Placeholders are visibly marked in the
rendered pages so none of them can ship unnoticed.
