import { DirectivesExamplePage } from './app.po';

describe('directives-example App', () => {
  let page: DirectivesExamplePage;

  beforeEach(() => {
    page = new DirectivesExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
