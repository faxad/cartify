import { CartifyPage } from './app.po';

describe('cartify App', function() {
  let page: CartifyPage;

  beforeEach(() => {
    page = new CartifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
