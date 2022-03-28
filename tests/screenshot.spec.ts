import { test } from '@playwright/test';

test('スクリーンショットを取得する',async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  // スクリーンショットを撮る
  await page.screenshot({ path: 'screenshot.png' });
  // フルページスクリーンショットを撮る
  await page.screenshot({ path: 'full_screenshot.png', fullPage: true });
  // 特定要素のスクリーンショットを撮る
  await page.locator('h1').screenshot({ path: 'element_screenshot.png'});
});
