// Funciones en JS

/*
 function nombre(params){
    body function
 }



const nombre = function (params){
    body function
}
*/
//funciones sin parametros y sin retorno
function saludo(){
    console.log("Heloo");
}
saludo();

//Funciones con parametros sin retorno 
const saludaA = function(name){
    console.log("Holaaa "+name);
}
saludaA("Clark Kent");

// funciones con parametros y con retorno
const fact = function(num){
    if(num === 0) return 1;
    return fact(num -1) * num;
}

const result = fact(5);
console.log(result);

//Arrow functions o funciones de flecha
// Sin parametros y sin retorno
const saludaEnChino = () => {
    console.log("Ni Hao");
}

saludaEnChino();

// con 1 parametro sin retorno
const mayuscula = (word) => {
    console.log(word.toUpperCase());
}
mayuscula("Hola");

const minuscula = word => {
    console.log(word.toLowerCase());
}
minuscula("Helo");

// Dos o mas parametros y con retorno
const fullName = (firstName, lastName) => {
    return firstName + ' ' + lastName;
}

const nombreCompleto = fullName("Bruce", "Wayne");
console.log(nombreCompleto);

// Si el return es la unica linea se puede simplificar 
const duplica = num => num * 2;
const doble = duplica(36);
console.log(doble);

/*
function duplica(num){
    return num * 2;
}
*/

// Funciones con parametros opcionales
const WelcomeToMexico = (user = 'invitado') => {
    console.log('Bienvenido a Mexico ${ user }');
}

WelcomeToMexico();
WelcomeToMexico("Batman");

// parametros con nombre 
const WelcomeToUtt = (user = 'Invitado', city = 'Mexico') => {
    console.log(`Bienvenido ${user} de ${city}`);
}

WelcomeToUtt();
WelcomeToUtt('Bruce Wayne', 'Gotham');
WelcomeToUtt(city = 'Metropolis', user = 'superman');