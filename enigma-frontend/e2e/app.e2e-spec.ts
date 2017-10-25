import { ENIGMAPage } from './app.po';

describe('enigma App', () => {
  let page: ENIGMAPage;

  beforeEach(() => {
    page = new ENIGMAPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
