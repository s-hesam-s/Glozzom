# Frontend dependency policy

Runtime script and stylesheet URLs in root HTML pages are recorded in [frontend-dependencies.json](frontend-dependencies.json). Exact versions, existing SRI values and anonymous CORS are checked offline in CI. A new CDN resource or changed integrity requires an explicit manifest review. Google Fonts CSS is the only dynamic stylesheet exception; it cannot authorize scripts. Local runtime asset hashes use LF-normalized text bytes to remain stable across Git checkout line endings.

```powershell
python scripts/check_site.py
python scripts/check_dependencies.py
python -m unittest discover -s tests -p test_dependencies.py
```

This guard checks declared resources and local drift. It does not fetch external URLs in CI, recursively validate resources imported by CDN CSS, or certify the absence of vulnerabilities. Bootstrap 5.1.3, jQuery 3.6.0 and Slick 1.9.0 are retained where used; exact-version advisory lookup found no reviewed advisory for those selected versions on 2026-10-28. Browser and integration coverage remain separate from these static checks.

Browser review of all five pages found four additional unavailable source.unsplash.com image URLs in about.html and blog.html. They now use the existing local image1/image2/image3 assets, preserving the sample-photo role without a remote random-image dependency.
