function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var angkaArr= [];
  var angkaArr2=[];
  for( x=0; x<angka; x++){
    if(angka%x===0){
      angkaArr.push(String(x) + String(angka/x));
      
    }
  }
  for ( i=0; i <angkaArr.length; i++){
      angkaArr2.push(Number(angkaArr[i]));
  }
  if(angkaArr2.sort(function(a,b){return a-b})[0] === undefined){
   return 2;
  } else {
   return String(angkaArr2.sort(function(a,b){return a-b})[0]).length;
  }
}


// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2