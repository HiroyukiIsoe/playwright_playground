import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // testsディレクトリをテストで利用する
  testDir: './tests',
  use: {
    // ヘッドレスモード
    headless: true,
    // ブラウザサイズ
    viewport: { width: 1280, height: 720 },
    // テストに失敗したときにスクリーンショットを撮る
    screenshot: 'only-on-failure',
    // テストごとに動画を録画し、テストに失敗した場合のみ動画を残す
    video: 'retain-on-failure',
  },
  
  projects: [
    // PC版Chromiumブラウザ
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Pixel 5 Chromiumブラウザ
    {
      name: 'Pixel 5',
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5']
      },
    },
  ],
};

export default config;
