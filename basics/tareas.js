const inpuTarea = document.getElementById('inputTarea');
const listaTareas = document.querySelector('#tareas ul');

const lista = [];

const addTarea = () => {
    const tareaData = inpuTarea.value;
    lista.push(tareaData);
    inpuTarea.value = '';
    showLista();
}

const showLista = () => {
    let listaHtml = '';
    lista.forEach(listaItem => {
        listaHtml += `<li>${ listaItem }</li>`;
    });
    listaTareas.innerHTML = listaHtml;
}