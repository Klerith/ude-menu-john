import { MenuappPage } from './app.po';

describe('menuapp App', () => {
  let page: MenuappPage;

  beforeEach(() => {
    page = new MenuappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
