import { ClarityFlexboxPage } from './app.po';

describe('clarity-flexbox App', () => {
  let page: ClarityFlexboxPage;

  beforeEach(() => {
    page = new ClarityFlexboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
