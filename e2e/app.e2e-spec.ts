import { AngularwpPage } from './app.po';

describe('angularwp App', function() {
  let page: AngularwpPage;

  beforeEach(() => {
    page = new AngularwpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
