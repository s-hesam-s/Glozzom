import { test, expect } from '@playwright/test';
import fs from 'node:fs';

const pages = JSON.parse(fs.readFileSync(new URL('../../docs/browser-pages.json', import.meta.url), 'utf8'));
const pageErrors = new WeakMap();
test.beforeEach(async ({ page }) => {
  const errors = []; pageErrors.set(page, errors);
  page.on('pageerror', error => errors.push(error.message));
});
test.afterEach(async ({ page }) => { expect(pageErrors.get(page)).toEqual([]); });
for (const file of pages) {
  test(`${file}: local images, responsive width and JavaScript`, async ({ page }) => {
    await page.goto('/' + file);
    await expect(page.locator('body')).toBeVisible();
    await expect.poll(() => page.evaluate(() => [...document.images]
      .filter(img => img.src.startsWith(location.origin))
      .every(img => img.complete && img.naturalWidth > 0))).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  });
}

test('carousel next changes the active slide', async ({ page }) => {
  await page.goto('/');
  const before = await page.locator('.carousel-item').evaluateAll(items => items.findIndex(x => x.classList.contains('active')));
  await page.locator('[data-bs-slide="next"]').click();
  await expect(page.locator('.carousel-item').nth((before + 1) % 3)).toHaveClass(/active/);
});
test('Services navigation opens the real page', async ({ page, viewport }) => {
  await page.goto('/');
  if (viewport.width < 768) await page.locator('button[data-bs-target="#navbarNav"]').click();
  await page.getByRole('link', { name: 'Services', exact: true }).click();
  await expect(page).toHaveURL(/services\.html$/);
});
