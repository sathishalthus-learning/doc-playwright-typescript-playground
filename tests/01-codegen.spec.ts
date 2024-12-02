import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.co.in/');
  await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
  await expect(page.getByRole('search')).toContainText('Google Search');
  await page.locator('iframe[name="callout"]').contentFrame().getByLabel('Stay signed out').click();
});