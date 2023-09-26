// Los objetos nos permiten almacenar datos
// a partir de una clave

/* 
miObjeto = {clave: visualViewport, 'clave': valor}
miObjeto.clave
miObjeto['clave']
*/

const subject = {
    name: 'Progrmacion',
    totalHours: 90,
    weekHours: 7,
    classroom: 'Lab Progra',
    teacher: 'Jose Manuel',
    'practice hours': 60
}

console.log(subject.name);
console.log(subject.totalHours);
console.log(subject['weekHours']);
console.log(subject['practice hours']);

subject.classroom = 'Lab de Programacion 1';
console.log(subject.classroom);

console.log(subject);

subject['teorical hours']=30;
console.log(subject);

const group = {
    name: '4C',
    career: 'TIDSM',
    subjects:[
        subject
    ],
    students: [
        { name: 'Gael', lastName: 'Perez'},
        { name: 'Juan', lastName: 'Sanchez'},
        { name: 'Dani', lastName: 'Alvarez'}
    ]
}

console.log(group);