import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';

test('Login Logout Test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();

  await loginPage.login(
    'practice',
    'SuperSecretPassword!'
  );
  await expect(
    page.getByText('You logged into a secure area!')
  ).toBeVisible();

  await dashboardPage.logout();

  await expect(page).toHaveURL(/login/);

});