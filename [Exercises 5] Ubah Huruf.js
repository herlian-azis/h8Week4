function ubahHuruf(kata) {
    // you can only write your code here!
    var libraryWords = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t',	'u','v','w','x','y','z'];
	var resultsWords = '';
	for (var i = 0; i < kata.length; i++) {
        for (j=0 ; j< libraryWords.length ; j++){
                if ( kata[i] === libraryWords[j]){
                    resultsWords += libraryWords[j+1]
                }
        }
	}
	return resultsWords;
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu