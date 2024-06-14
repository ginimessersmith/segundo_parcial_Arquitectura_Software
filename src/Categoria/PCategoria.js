import NCategoria from './NCategoria.js';

export default class PCategoria {
    NCategoria = new NCategoria();
    constructor() {
    }

    clickGuardar() {
        let idCategoria = document.getElementById('id');
        if (idCategoria.value === "") {
            this.agregarCategoria();//guardar
        } else {
            this.actualizarCategoria(idCategoria.value);//actualizar
        }
    }

    clickDeshacer(){
        this.NCategoria.deshacer();
    }

    agregarCategoria() {
        let nombreCategoria = document.getElementById('nombre');
        let descripcionCategoria = document.getElementById('descripcion');
        let mensaje = document.getElementById('error');

        let resultado = this.NCategoria.agregarCategoria(
            nombreCategoria.value,
            descripcionCategoria.value
        );

        if (resultado === true) {
            nombreCategoria.value = "";
            descripcionCategoria.value = "";
            mensaje.innerHTML = "";
        }else{
            mensaje.innerHTML = resultado;
        }
    }

    listarCategoria() {
        let tableBody = document.getElementById('tabla-categorias');
        let listaCategoria = this.NCategoria.listarCategoria();
        let html = '';
        listaCategoria.forEach(categoria => {
            html += `<tr>
                        <td>${categoria.id}</td>
                        <td>${categoria.nombre}</td>
                        <td>${categoria.descripcion}</td>
                        <td>
                            <button onclick="editarCategoria(${categoria.id})">Editar</button>
                            <button onclick="eliminarCategoria(${categoria.id})">Eliminar</button>
                        </td>
                    </tr>`;
        });
        tableBody.innerHTML = html;
    }

    editarCategoria(id) {
        let listaCategoria = this.NCategoria.listarCategoria();
        let categoria = listaCategoria.find(categoria => categoria.id === id);

        let nombreCategoria = document.getElementById('nombre');
        let descripcionCategoria = document.getElementById('descripcion');
        let idCategoria = document.getElementById('id');

        idCategoria.value = categoria.id;
        nombreCategoria.value = categoria.nombre;
        descripcionCategoria.value = categoria.descripcion;
    }

    actualizarCategoria(id) {
        let nombreCategoria = document.getElementById('nombre');
        let descripcionCategoria = document.getElementById('descripcion');
        let idCategoria = document.getElementById('id');
        let mensaje = document.getElementById('error');

        let resultado = this.NCategoria.actualizarCategoria(
            id,
            nombreCategoria.value,
            descripcionCategoria.value
        );

        if (resultado === true) {
            nombreCategoria.value = "";
            descripcionCategoria.value = "";
            idCategoria.value = "";
            mensaje.innerHTML = "";
        } else {
            mensaje.innerHTML = resultado;
        }
    }

    eliminarCategoria(id) {
        let mensaje = document.getElementById('error');
        let resultado = this.NCategoria.eliminarCategoria(id);
        if (resultado === true) {
            mensaje.innerHTML = "";
        } else {
            mensaje.innerHTML = resultado;
        }
    }

}

