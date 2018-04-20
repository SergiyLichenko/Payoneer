import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  async getPendingPaymentCheckboxAsync() {
    let checkboxes = await element.all(by.css('mat-checkbox'));
    return checkboxes[0];
  }

  async getTableRowsAsync() {
    return await element.all(by.css('mat-table mat-row'));
  }
}
