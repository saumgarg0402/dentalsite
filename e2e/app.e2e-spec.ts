import { DentalsitePage } from './app.po';

describe('dentalsite App', function() {
  let page: DentalsitePage;

  beforeEach(() => {
    page = new DentalsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
