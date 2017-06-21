import { DynamicComponenyWithComponentFactoryResolverPage } from './app.po';

describe('dynamic-componeny-with-component-factory-resolver App', () => {
  let page: DynamicComponenyWithComponentFactoryResolverPage;

  beforeEach(() => {
    page = new DynamicComponenyWithComponentFactoryResolverPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
