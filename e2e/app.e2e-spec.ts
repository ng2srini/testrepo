import { TestrepoPage } from './app.po';

describe('testrepo App', function() {
  let page: TestrepoPage;

  beforeEach(() => {
    page = new TestrepoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
