const Browser = require('zombie');
Browser.localhost('example.com', 3000);
describe('the landing page', () => {
  let browser;
  /**
   * This loads the running web application
   * with a new `zombie` browser before each test.
   */
  beforeEach(done => {
    browser = new Browser();

    browser.visit('/', err => {
      if (err) return done.fail(err);
      done();
    });
  });

  /*
   *
   * `zombie` has loaded and rendered the page
   * returned by your application. Use `jasmine`
   * and `zombie` to ensure it's doing what you
   * expect.
   *
   */

  it('displays the page title', () => {
    browser.assert.text('h1', 'transposer');
  });

  it('displays the transposer icon', () => {
    browser.assert.element('header img[src="/images/transposer.png"]');
  });

  it('displays original song text area', () => {
    browser.assert.element('body textarea[name="originalSong"]');
  });

  it('displays 80 characters for the original song text area', ()=> {
    browser.assert.element('body textarea[cols="80"]');
  });

  it('displays 20 rows for the original song text area', ()=> {
    browser.assert.element('body textarea[rows="20"]');
  });

});