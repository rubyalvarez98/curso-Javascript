//incremento su funcion es aumentar de uno en uno
let numero = 5;
numero = numero + 1;
++numero;
console.log(numero);

//decremento restar de uno en uno
let numero2 = 8;
numero2 = numero2 - 1;
--numero2;
console.log(numero2);

/*
Operadores logicos
 */
//Negación !
const visible = true;
console.log(!visible);

const notVisible = false;
console.log(!notVisible);

// AND &&
console.log(visible && notVisible);

// OR ||
console.log(visible || notVisible);

   
/*relacionales e igualdad 
mayor que >
menor que <
mayor o igual >=
menor o igual <=
estricta === y difentente !== 
no estricta == y !=

 */
const valor1 = "2";
const valor2 = 2;

console.log(valor1 >= valor2);
console.log(valor1 === valor2);//evalua el valor y el tipo de dato  
console.log(valor1 == valor2);// solo evalua el valor