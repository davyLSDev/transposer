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

  it('displays original song text area form', () => {  
    browser.assert.text('#originalSong h2', 'original song');
    browser.assert.element('#originalSong textarea[name=originalSong]');
    browser.assert.element('#originalSong textarea[cols="60"]');
    browser.assert.element('#originalSong textarea[rows="20"]')
  });
  
/* How do you keep this DRY? */
  it('displays transposed song area', () => {
    browser.assert.element('input[type=submit]');
    browser.assert.text('#transposedSong h2', "transposed song");
    browser.assert.element('#transposedSong textarea[name=transposedSong]');
    browser.assert.element('#transposedSong textarea[cols="60"]');
    browser.assert.element('#transposedSong textarea[rows="20"]');
  });
  
});