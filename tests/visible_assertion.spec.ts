import { test, expect } from '@playwright/test';

test('Visibleのアサーション',async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  // todoを追加する
  await page.locator('input.new-todo').fill('Todo');
  await page.locator('input.new-todo').press('Enter');

  // TODO表示欄を表示している
  await expect(page.locator('.main')).toBeVisible();
  // フッター欄を表示している
  await expect(page.locator('.footer')).toBeVisible();
});
