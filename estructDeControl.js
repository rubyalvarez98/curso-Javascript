// If...Else
const edad = 18;
if(edad >=18){
    console.log("Es mayor de edad");
}
else{
    console.log("Es menor de edad");
}

//Switch: permite evaluar una expresion
const tipoFruta = "peras";
switch(tipoFruta){
    case "Naranjas":
        console.log("son naranjas");
        break;
    case "peras":
        console.log("son peras");
        break;
        default:
            console.log('no es el tipo de fruta');
}
//Bucles: For
for(let paso = 0; paso < 5; paso++){
    console.log(`El paso es: ${paso} usando temlate literals`);
    console.log("El paso es: " +paso+" usando concatenación");
}
//Bucles: While ejecuta la sentencia mientras la condicion sea evaluada como verdadera.
let n = 0;
let x = 0;
while(n < 3){
    n++;
    //x = x + n;
    x += n; // esta es la forma abreviada de la anterior
    console.log(n);// si quiero saber el paso a paso el console.log debe ir dentro del  parentesis.
    console.log(x);
}
console.log("El resultado de n es:" + n);// este  console.log fuera de los parenstesis solo imprime el resultado final.
console.log(`El resultado de x es: ${x}`);