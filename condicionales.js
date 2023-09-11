// Conicional if
// if(expresion){}
let age = 18;
if(age >= 18){
    console.log("Es mayor de edad");
}




// if(expresion){} else {}
if(age >= 18){
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}



// if ternario (expresion)? true: false;
(age >= 18)? console.log("Es mayor"): console.log("Es menor");




// if(expresion){} else if (expresion) else {}
let ppt = Math.random();
if(ppt < 0.33){
    console.log("Cayo piedra");
} else if (ppt < 0.66){
    console.log("Cayo papel");
} else {
    console.log("Cayo tijera");
}




//switch case
let day = Math.floor(Math.random() * 7);
switch(day){
    case 0:
        console.log("Es Domingo");
        break;
    case 1:
        console.log("Es Lunes");
        break;
    case 2:
        console.log("Es Martes");
        break;
    case 3:
        console.log("Es Miercoles");
        break;
    case 4:
        console.log("Es Jueves");
        break;
    case 5:
        console.log("Es Viernes");
        break;
    default:
        console.log("Es Sabado");
}





//Truthy and Falsy
// '' == False
console.log('' === false);

// 'a' == True 
console.log('a' === true);

// 0 == false
console.log(0 === false);

// 1 == true
console.log(1 === true);



let username = '';
let defaultName;

if(username){
    defaultName = username;
} else {
    defaultName = "Extraño";
}
console.log(defaultName);

username = 'Peter';
defaultName = username || 'Extraño';
console.log(defaultName);
