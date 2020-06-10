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

  it('displays original song text label', () => {
    browser.assert.text('#originalSong h2', 'original song');
  });

  it('displays original song text area', () => {
    browser.assert.element('#originalSong textarea[name=originalSong]');
  });

  it('displays 80 characters for the song text area', ()=> {
    browser.assert.element('#originalSong textarea[cols="80"]');
  });

  it('displays 20 rows for the song text area', ()=> {
    browser.assert.element('#originalSong textarea[rows="20"]');
  });

/* How do you keep this DRY? */
  it('displays transposed song text label', () => {
    browser.assert.text('#transposedSong h2', "transposed song");
  });

  it('displays transposed song text area', () => {
    browser.assert.element('#transposedSong textarea[name=transposedSong]');
  });

  it('displays 80 characters for the transposed song text area', ()=> {
    browser.assert.element('#transposedSong textarea[cols="80"]');
  });

  it('displays 20 rows for the transposed song text area', ()=> {
    browser.assert.element('#transposedSong textarea[rows="20"]');
  });
  
});