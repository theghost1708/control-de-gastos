let listaNombresGastos = [];
let listaValoresGastos = [];

let posicionModificada = null;

//Esta funcion se invoca al momento de que el usuario hace click en el 
//boton

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    //procedimiento para agregar un elemento a un arreglo
    if (posicionModificada === null) { 
        // Agregar un nuevo gasto
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
} else {
    // Modificar el gasto existente
    listaNombresGastos[posicionModificada] = nombreGasto;
    listaValoresGastos[posicionModificada] = valorGasto;

    // Resetear la posición después de modificar
    posicionModificada = null; 
    // Cambiar el texto del botón
    document.getElementById('botonFormulario').textContent = "Agregar Gasto"; 
}

    //alert('Click de usuario')
    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');

    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);

        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} 
                    <button onclick="editarGasto(${posicion});">Editar</button>
                    <button onclick="eliminarGasto(${posicion});">Eliminar</button>

            </li>`;
        //calculamos el total de gastos
        totalGastos += Number(valorGasto);
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();

}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function editarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    
    document.getElementById('botonFormulario').textContent = "Guardar modificacion";
    posicionModificada = posicion;
}