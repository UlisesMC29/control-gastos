// LISTAS O ARRAYS VACI@S
let listaNombresGastos = [];
let listaValoresGastos = [];


//FUNCION QUE INDICA LA ACCIÓN AL CLICKEAR EL BOTÓN
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;//Método JS para obtener el valor de un elemento dentro del HTML
    let valorGasto = document.getElementById('valorGasto').value;

    console.log(nombreGasto + ': ' + valorGasto + ' USD')
    // console.log('Antes: ' + listaNombresGastos);

    listaNombresGastos.push(nombreGasto);//Función de JS para agregar elementos a una lista/array vací@ predefinid@
    listaValoresGastos.push(valorGasto);
    
    console.log(listaNombresGastos);
    console.log(listaValoresGastos);

    
    // alert('Funcionando');
    actualizarListaGastos();//Función que se ejecutara al clickear botón
}

//FUNCION PARA MOSTRAR LOS ELEMENTOS QUE SE ALMACENAN DENTRO DE LAS LISTAS
function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');//Método de JS para obtener un elemento dentro del HTML
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = ''; //variable vacía para que los elementos anteriores no queden almacenados y se pueda actualizar
    let totalGasto = 0;//variable con número 0 inicial para la suma de los gastos

    //bucle que leera un elemento por posición
    listaNombresGastos.forEach((element, position) => {
        const valorDGasto = Number(listaValoresGastos[position]); //Constante que contendrá el valor de la lista en la posición indicada
        htmlLista += `<li>${element} - USD ${valorDGasto.toFixed(2)}
             <button onclick="eliminarGasto(${position});">Eliminar</button>
        </li>`;
        totalGasto += Number(valorDGasto);//método JS para convertir un valor string en un número (incluyendo decimales)
    });

    // console.log(listaElementos);
    listaElementos.innerHTML = htmlLista; //método JS para sustituir un elemento dentro del HTML
    totalElementos.innerHTML = totalGasto.toFixed(2);

    limpiar();// llamamos la función 
}

//FUNCIÓN PARA LIMPIAR LOS CAMPOS / INPUTS DENTRO DEL HMTL
function limpiar() {
    document.getElementById('nombreGasto').value = ''; //con el método tomamos el valor de los inputs y los cambiamos por un valor vacio
    document.getElementById('valorGasto').value = '';
}

/**
 * NOTA DE APRENDIZAJE:
 * -PARAMETRO ES CUANDO MANDA A LLAMAR UN VALOR
 * -ARGUMENTO ES CUANDO SE RECIBE EN UN VALOR
 */

//FUNCION CON UN ARGUMENTO RECIBIDO DESDE EL ONCLICK
function eliminarGasto(position){
    listaNombresGastos.splice(position, 1);// función JS para eliminar elementos de una lista según la posición
    listaValoresGastos.splice(position, 1);

    actualizarListaGastos();
}