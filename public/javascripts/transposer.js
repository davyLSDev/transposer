
/* There is an npm module available that does all this, but I am doing this for learning purposes.
After I get the basics working is the time to simplify the code and use the modul assuming it all
works correctly. Here is where it resides: https://www.npmjs.com/package/chord-transposer */

/* function chordTranspose(originalKey, transposeKey, songChord) {
    return "C";
}
*/

function chordTranspose(originalKey, transposeKey, songChord) {
    return "Eh? I don\'t know how to do that yet";
  }
  
  document.getElementById('transposeButton').addEventListener('click', function(e) {
    e.preventDefault();
  
    // var out = document.querySelector('textarea[name="transposedSong"]');
    var out = document.getElementById('statusMessage');
    out.innerHTML = chordTranspose();
  });
  
  /**
   * This only works on the server side when expressed in this manner
   */
  //module.exports = { chordTranspose };