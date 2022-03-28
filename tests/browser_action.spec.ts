import { test, expect } from '@playwright/test';

const TODO_ITEM = 'Use Playwright';

test('新しいTODOを追加する', async({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  // todoを追加する
  await page.locator('input.new-todo').fill(TODO_ITEM);
  await page.locator('input.new-todo').press('Enter');

  // 追加したTODOを確認する
  await expect(page.locator('div.view label')).toHaveText(TODO_ITEM);
});
