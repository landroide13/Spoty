import { SpotAppPage } from './app.po';

describe('spot-app App', () => {
  let page: SpotAppPage;

  beforeEach(() => {
    page = new SpotAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
