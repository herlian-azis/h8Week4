function changeMe(arr) {
 
  var person = {};
  var dataPerson = '';

  for ( i = 0; i < arr.length; i++) {
      console.log(i + 1 + '.' + arr[i][0] + ' ' + arr[i][1] + ' :');
      person.firstName = arr[i][0];
      person.lastName = arr[i][1];
      person.gender = arr[i][2];
      if (arr[i][3] === undefined || arr[i][3] > 2020) {
          person.age = 'Invalid Birth Year';
      } else {
          person.age = 2020 - arr[i][3];
      }
     console.log(person);
  }

  if (arr == 0) {
      console.log(`""`);
  }
    }


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""