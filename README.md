# Glozzom — Multipage Website

An educational Bootstrap website with separate marketing, services, blog and contact pages.

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

No automated behavior-test suite is included. Preview instructions are not a claim that every third-party widget is compatible with current CDN responses. Application services, persistent storage and deployment are outside this UI exercise.

## Project scope and reuse

This is an educational repository. The implementation notes describe the code in this repository; they do not claim a deployed commercial service or measured production results. Third-party libraries and assets retain their own terms. No project-wide license is currently declared.

## Continuous integration

GitHub Actions checks root HTML documents for a doctype, document shell, nonempty title and duplicate IDs. It also verifies local href/src/poster targets, filename casing and HTML/SVG fragments using `python3 scripts/check_site.py`. Remote URLs and placeholder `#` links are not fetched; this is not a full HTML5 conformance, accessibility or browser interaction test. No npm installation, backend or deployment is involved.

The [CI workflow](.github/workflows/ci.yml) runs for pull requests and pushes to `master`, and can be started manually. It uses read-only repository permissions and does not deploy the project.
