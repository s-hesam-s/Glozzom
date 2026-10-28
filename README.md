# Glozzom — Multipage Website

An educational Bootstrap website with separate marketing, services, blog and contact pages.

## Captured preview

<picture><source media="(prefers-reduced-motion: reduce)" srcset="docs/screenshots/portfolio-poster.png" /><source type="image/webp" srcset="docs/screenshots/portfolio.webp" /><img src="docs/screenshots/portfolio.gif" width="100%" alt="Glozzom — actual captured UI states" /></picture>

Business-site carousel and local photo gallery. Six broken remote gallery images now use assets already present in this repository.

[Reproduce this capture and view the static image](docs/PORTFOLIO-PREVIEW.md) · [Mobile capture](docs/screenshots/portfolio-mobile.png)

## Included UI

- Navigation, carousel and feature sections on the home page.
- Additional about/services/blog/contact layouts and a gallery/video presentation.

## Repository map

| Path | Purpose |
|---|---|
| [index.html](index.html) | Home page |
| [about.html](about.html) | About layout |
| [services.html](services.html) | Services layout |
| [blog.html](blog.html) | Blog layout |
| [contact.html](contact.html) | Contact layout |
| [css](css) | Styles |
| [img](img) | Local images |

## Preview locally

Use a modern browser and Python 3 for a simple loopback-only static server. From a terminal:

```powershell
git clone https://github.com/s-hesam-s/Glozzom.git
cd Glozzom
```

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/index.html`. Keep the terminal open while previewing and press Ctrl+C to stop it. No database or application backend is needed.

There is no package manifest or build step in this repository; the checked-in HTML and CSS are the preview inputs.

## External resources

The pages reference resources from `cdn.jsdelivr.net`, `cdnjs.cloudflare.com`, `code.jquery.com`, `source.unsplash.com`, `use.fontawesome.com`, `www.youtube.com`. Internet access is needed for the referenced CDN scripts, fonts or remote images; the repository is not a fully offline asset bundle. Third-party resource availability can affect the preview.

## Verification and limitations

Browse all five pages, check narrow-screen navigation, carousel and gallery/video UI. Newsletter and contact forms are front-end examples; no server-side submission service is included.

An isolated Chromium regression suite checks selected real interactions at desktop and mobile widths; dependency-policy regressions run separately. Preview instructions are not a claim that every third-party widget is compatible with current CDN responses. Application services, persistent storage and deployment are outside this UI exercise.

## Project scope and reuse

This is an educational repository. The implementation notes describe the code in this repository; they do not claim a deployed commercial service or measured production results. Third-party libraries and assets retain their own terms. No project-wide license is currently declared.

## Continuous integration

GitHub Actions checks root HTML documents for a doctype, document shell, nonempty title and duplicate IDs. It also verifies local href/src/poster targets, filename casing and HTML/SVG fragments using `python3 scripts/check_site.py`. Remote URLs and placeholder `#` links are not fetched; this is not a full HTML5 conformance, accessibility or browser interaction test. The structural check requires no npm installation. The separate browser job installs development-only tooling; no backend or deployment is involved.

The [CI workflow](.github/workflows/ci.yml) runs for pull requests and pushes to `master`, and can be started manually. It uses read-only repository permissions and does not deploy the project.

## Runtime dependency checks

[Dependency inventory, local asset policy and verification commands](docs/FRONTEND-DEPENDENCIES.md) describe the exact runtime resources and CI guard.

## Maintenance checks

The existing CI also runs weekly on Monday and checks tracked Markdown file destinations with `scripts/check_doc_links.py`. Its negative tests cover moved documents, missing picture variants, paths outside the repository and untracked local drafts. External URLs and heading fragments are intentionally outside this offline file check. Scheduled runs do not deploy or start original application hosts.

Browser regressions: [test scope and local commands](docs/BROWSER-TESTS.md). Exact reviewed runtime versions are also checked against current GitHub advisories; CDN coverage and API failure cases are tested separately.
