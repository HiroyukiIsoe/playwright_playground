import { test, expect } from '@playwright/test';

test('チェックのアサーション',async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  // todoを追加する
  await page.locator('input.new-todo').fill('Todo');
  await page.locator('input.new-todo').press('Enter');

  // すべて完了にチェックを入れる
  const toggleAll = page.locator('#toggle-all');
  await toggleAll.check();

  // チェックできているか確認する
  await expect(toggleAll).toBeChecked();

  // すべて完了のチェックをはずす
  await toggleAll.uncheck();

  // チェックが外れているか確認する
  await expect(toggleAll).toBeChecked({ checked: false });
});
