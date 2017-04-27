import { Project01Page } from './app.po';

describe('project01 App', () => {
  let page: Project01Page;

  beforeEach(() => {
    page = new Project01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
