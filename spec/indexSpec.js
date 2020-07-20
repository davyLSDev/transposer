const original = "Happy birthday to you [F]Happy birthday to [C]you happy birthday to [F]you happy birthday [C]dear [Bb](NAME) [Bb]happy [F]birthday [C]to [F]you";
// just for temporarily testing
const transposed = original;

var assert=require('assert'); // that I need this is here; https://github.com/visionmedia/expresso/issues/76
var transpose=require('../public/javascripts/transposer');

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
    browser.assert.text('div.labelOriginal p', "original song");
    browser.assert.element('div.originalSong textarea[name=originalSong]');
    browser.assert.element('div.originalSong textarea[cols="60"]');
    browser.assert.element('div.originalSong textarea[rows="24"]')
  });
  
/* How do you keep this DRY? */
  it('displays transposed song area', () => {
    browser.assert.element('div.transposeButton input[type=submit]');
    browser.assert.text('div.labelTransposed p', "transposed song");
    browser.assert.element('div.transposedSong textarea[name=transposedSong]');
    browser.assert.element('div.transposedSong textarea[cols="60"]');
    browser.assert.element('div.transposedSong textarea[rows="24"]');
  });

  it('displays menu toolbar', () => {
    browser.assert.element('div.hamburgerDropdown img[src="/images/hamburger24.png"]');
    browser.assert.text('div.songKeyDropdown p', "original key dropdown");
    browser.assert.text('div.transposeKeyDropdown p', "transpose key dropdown");
    browser.assert.element('div.transposeButton input[value="transpose"]');
  });

  it('transposes a song', ()=> {
  //  browser.pressButton('transpose', () => {
    browser.assert.text('div.originalSong textarea', original);
    browser.assert.text('div.transposedSong textarea', transposed);
  });

  it('transposes chords', ()=> {
    // testing every combination needs to be done, but how to do it efficiently? Data tables or s/th?
    expect(transpose.chordTranspose("C","C","C")).toBe("C");
  });

  it('transposes the chords in the entered song', ()=> {
    
  });
  
  it('displays a footer for status messages', () => {
    browser.assert.element('footer p');
    browser.assert.text('footer p', 'transposer messages go here');
  });
  
});
