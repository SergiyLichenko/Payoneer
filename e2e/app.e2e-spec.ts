import { AppPage } from './app.po';
import { browser, by } from 'protractor';

describe('payoneer App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();

    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    browser.sleep(500);
  });

  it('should check initial count of table rows', async () => {
    //Arrange
    await page.navigateTo();

    //Act
    let tableRows = await page.getTableRowsAsync();

    //Assert
    expect(tableRows.length).toBe(4);
  });

  it('should filter by pending payments', async () => {
    //Arrange
    await page.navigateTo();
    let pendingCheckbox = await page.getPendingPaymentCheckboxAsync();

    //Act
    await pendingCheckbox.click();

    //Assert
    let tableRows = await page.getTableRowsAsync();

    let pendingSpan = tableRows[0].element(by.css('mat-cell:nth-of-type(2) span'));
    let text = await pendingSpan.getText();
    expect(text).toBe('Pending');

    pendingSpan = tableRows[1].element(by.css('mat-cell:nth-of-type(2) span'));
    text = await pendingSpan.getText();
    expect(text).toBe('Pending');
  });
});
