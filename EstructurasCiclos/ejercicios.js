
//Función Palindromo//

function Palindromo(text) {
  

    return  text.split("").reverse().join("") === text ;
  }
  console.log(Palindromo("vaso")); 
  console.log(Palindromo("ara")); 
  console.log(Palindromo("omo")); 




//Función Fibonacci//

function fibonacci(n){
    return n < 2? n: fibonacci(n-1) + fibonacci(n-2)
  }
  console.log(fibonacci(5))
  console.log(fibonacci(7))
  console.log(fibonacci(9))





  //hacer una programa que muestre el factorial de un numero //

const numero = 5; 
let factorial = 1;
for(let i = numero; i>0; i--){
    factorial *= i;
}
console.log(factorial);