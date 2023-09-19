// Funciones de Orden Superior
// High Oder Functions
// Funciones que reciben como pramteros
// más funciones

const myFunctionWithBigName = () => {
    console.log('Funcion Inicial');
}

console.log(myFunctionWithBigName);
myFunctionWithBigName();

const myFun = myFunctionWithBigName;
myFun();

const funOne = () => {
    console.log('Ejecuta Funcion uno');
}

const funTwo = (nombre) => {
    console.log("hi " +nombre);
    console.log("Ejecuta Funcion Dos");
}

funOne();
funTwo('Frank');

const funThree = (otherFunction) => {
    console.log('Inicia Funcion Tres');
    otherFunction();
    console.log('Termina Funcion Tres');
}

funThree(funOne);
funThree(() => console.log('Funcion de Flecha'));