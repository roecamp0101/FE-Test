import { FETestPage } from './app.po';

describe('fe-test App', function() {
  let page: FETestPage;

  beforeEach(() => {
    page = new FETestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
