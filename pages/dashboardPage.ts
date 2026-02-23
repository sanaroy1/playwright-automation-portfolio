import { Page, Locator } from '@playwright/test';

export class DashboardPage {

  readonly page: Page;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutButton = page.getByRole('link', { name: /logout/i });
  }

  async logout() {

    await Promise.all([
      this.page.waitForURL(/login/),
      this.logoutButton.click()
    ]);

  }
}