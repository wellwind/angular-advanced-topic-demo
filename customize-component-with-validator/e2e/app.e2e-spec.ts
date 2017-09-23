import { CustomizeComponentWithNgmodelPage } from './app.po';

describe('customize-component-with-ngmodel App', () => {
  let page: CustomizeComponentWithNgmodelPage;

  beforeEach(() => {
    page = new CustomizeComponentWithNgmodelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
