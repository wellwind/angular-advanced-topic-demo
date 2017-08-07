import { TestingWithFakeasyncPage } from './app.po';

describe('testing-with-fakeasync App', () => {
  let page: TestingWithFakeasyncPage;

  beforeEach(() => {
    page = new TestingWithFakeasyncPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
