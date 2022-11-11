

// for(let inicial=2;inicial<=20;inicial+2){
//     console.log(inicial)
// }



for(let i=1;i<=20;i++){
  if(i%2==0){
      console.log(i)
  }else{
      console.log(i)
  }  
}




// let vocales="aeiou"
// console.log(vocales.length)
// console.log(vocales[2]) 
// for(let i=0;i<vocales.length;i++){
//   console.log(vocales[i])
// }



//

// let texto="hola"
// let contador=0
// for(let i=0;i<texto.length;i++){ 
//   if(texto[i]=="a"){
//       contador+=1
//   }
// }
// console.log("tienes",contador,"vocales a")
// //


//

let vocales="rosa"
let contador=0
for(let i=0;i<vocales.length;i++){ 
  // {switch(texto[i]){
  //     case"a": case "e" : case "i" : case "o" : case "u" :
  //     contador+=1
  // }}
  
  if(vocales[i]=="a"){
      contador+=1
  }
  if(vocales[i]=="e"){
      contador+=1
  }
  if(vocales[i]=="i"){
      contador+=1
  }
  if(vocales[i]=="o"){
      contador+=1

  }if(vocales[i]=="u"){
      contador+=1
  }
}
console.log("tienes",contador,"vocales ")
//







// hacer un programa que muestre el factorial de un numero
5!=5*4*3*2*1
// hacer un programa que me determine si un texto es palindromo
ara
// hacer un programa que muestre los 6 primeros numeros de la ServiceWorkerde fibonaci
1-2-3-5-8-13-21







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





