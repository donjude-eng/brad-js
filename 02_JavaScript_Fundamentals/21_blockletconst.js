// Global Scope

var   a = 1;
let   b = 2;
const c = 3;

console.log ('Global Scope', a,b,c)

function test (){
  var a = 4;
  let b =5;
  const c =6;
  console.log ('Function Scope: ', a ,b ,c);


}
// test();

// if(true){
//  //Block Scope
//   var a = 4;
//   let b =5;
//   const c =6;
//   console.log ('if Scope :',a,b,c)
// }


for (var a=0; a<10; a++){
  console.log (`Loop: ${a}`);
}

console.log ('Global Scope: ', a ,b, c);



// console.log ('Global Scope a =', a );
// if (a === 1)

// {

//   console.log('immediately inside',a)
//   var a  = 20;

//   console.log('after redefintion',a)
// }

//global scope

// {
//   //outermost scope after global scope
//   {
//     //next outer scope
//     {
//       //next outer scope
//       {
//         //innermost scope
//       }
//     }
//   }
// }