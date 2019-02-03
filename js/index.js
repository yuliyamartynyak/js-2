const n = parseInt(prompt('Enter Fibonacci number'));


    function fib(n) {
      return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }
    
    alert( fib(3) ); // 2
    alert( fib(7) ); // 13


//const first = 1;
//const second = 1;
//for (let i = 3; i <= 10; i++) {
//    const next = first + second;
//
//}






//function fibRec(n) {
 //   if (n <= 1) return 1;
 //   return fibRec(n-1) + fibRec(n-2);
//}
    



//for (let i = 100; i >= 1; i = i - 1) {
//  console.log(i);  
//}

//let i = 0;
//while (i <= 100) {
//    console.log(i);
//    i++;
//}

//let i = 0;
//do {
//    console.log(i);
//    i++;
//} while (i <= 100)

//let productNames = [];
//productNames.push('Tesla X');
//productNames.push('Chevrolet');
//productNames.push('Prado');
//console.log(productNames[2]);
//productNames[0] = 'Tesla S';
//console.log(productNames[0]);
//productNames[3] = 'ZAZ Lanos';
//console.log(productNames.length)

//console.log('Prinnting all');

//for (let i = 0; i < productNames.length; i++)
//console.log(productNames[i])


//function pickIt(arr){
//  var odd=[],even=[];
//  for (let i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 === 1) {
//  odd.push(arr[i]);
//  } else { 
//  even.push(arr[i]);
//  }
// return [odd,even];
//
//}

