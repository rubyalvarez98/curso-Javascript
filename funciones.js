function square(number){
    return number * number;
}

function message(){
    return "Hello World.";
}
function messageTwo(){
    var message = "hola mundo";
}
function messageThree(name,number){
    return `hola ${name}, yo se que tu tienes ${ square(number)} años`;
}
function showFullName(user){
     return `hola ${user.name} ${user.lastName}`; //objeto
}
function showFullNameArray(users){
    return `hola ${users[0].name} ${users[0].lastName}`; //Arrays
}
var users = [{name:'Maria',lastName:'Gomez'}]; 

function sum(num1, num2){
    return num1 + num2;
}
//console.log(square(2)); retun 4
//console.log( message() ); return Hello World
//console.log( messageTwo()); return undefined
//console.log( messageThree(`Maria Gomez`,5)); return hola Maria Gomez, yo se que tu tienes 25 años
//console.log(showFullName({name:'Maria',lastName:'Gomez'})) return hola Maria Gomez Objeto
//console.log( showFullNameArray(users) ); return hola Maria Gomez Array
console.log( sum(2,5));