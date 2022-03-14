import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  const title = page.locator('header h1');
  await expect(title).toHaveText('todos');
});
