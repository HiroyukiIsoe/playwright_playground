import { test, expect } from '@playwright/test';

const TODO_ITEM = 'Use Playwright';

test('チェックのアサーション',async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  // Todoを追加する
  await page.locator('input.new-todo').fill(TODO_ITEM);
  await page.locator('input.new-todo').press('Enter');

  // Todo項目を編集モードにする
  const todoItem = page.locator('.todo-list li').nth(0);
  await todoItem.dblclick();
  
  // 編集モードのValueをテストする
  await expect(todoItem.locator('.edit')).toHaveValue(TODO_ITEM);
});
