import NEvento from "./NEvento.js";
import NCategoria from "../Categoria/NCategoria.js";
import NOrganizador from "../Organizador/NOrganizador.js";

export default class PEvento {
    NEvento = new NEvento()
    NCategoria = new NCategoria()
    NOrganizador = new NOrganizador()
    
    constructor() {
    }

    clickGuardar() {
        let idEvento = document.getElementById('id');
        if (idEvento.value === "") {
            this.agregarEvento();
        } else {
            this.actualizarEvento(idEvento.value);
        }
    }

    agregarEvento(){
        let tituloEvento = document.getElementById('titulo');
        let descripcionEvento = document.getElementById('descripcion');
        let direccionEvento = document.getElementById('direccion');
        let fechaEvento = document.getElementById('fecha');
        let idOrganizadorEvento = document.getElementById('organizador');
        let idCategoriaEvento = document.getElementById('categoria');
        let mensaje = document.getElementById('error');

        let resultado = this.NEvento.agregarEvento(
            tituloEvento.value,
            descripcionEvento.value,
            direccionEvento.value,
            fechaEvento.value,
            idOrganizadorEvento.value,
            idCategoriaEvento.value
        );

        if (resultado === true) {
            tituloEvento.value = "";
            descripcionEvento.value = "";
            direccionEvento.value = "";
            fechaEvento.value = "";
            idOrganizadorEvento.value = "";
            idCategoriaEvento.value = "";
            mensaje.innerHTML = "";
        } else {
            mensaje.innerHTML = resultado;
        }
    }

    listarEvento(){
        let tableBody = document.getElementById('tabla-eventos');
        let selectOrganizador = document.getElementById('organizador');
        let selectCategoria = document.getElementById('categoria');

        let listaOrganizador = this.NOrganizador.listarOrganizadores();
        let listaCategoria = this.NCategoria.listarCategoria();

        let listaEvento = this.NEvento.listarEvento(listaCategoria, listaOrganizador);
        

        let html = '';
        listaEvento.forEach(evento => {
            html += `<tr>
                        <td>${evento.id}</td>
                        <td>${evento.titulo}</td>
                        <td>${evento.descripcion}</td>
                        <td>${evento.direccion}</td>
                        <td>${evento.fecha}</td>
                        <td>${evento.organizador}</td>
                        <td>${evento.categoria}</td>
                        <td>
                            <button onclick="editarEvento(${evento.id})">Editar</button>
                            <button onclick="eliminarEvento(${evento.id})">Eliminar</button>
                        </td>
                    </tr>`;
        });

        tableBody.innerHTML = html;

        let htmlOrganizador = '';
        listaOrganizador.forEach(organizador => {
            htmlOrganizador += `<option value="${organizador.id}">${organizador.nombre + " " + organizador.apellido}</option>`;
        });

        selectOrganizador.innerHTML = htmlOrganizador;

        let htmlCategoria = '';
        listaCategoria.forEach(categoria => {
            htmlCategoria += `<option value="${categoria.id}">${categoria.nombre}</option>`;
        });

        selectCategoria.innerHTML = htmlCategoria;
    }

    editarEvento(id){
        let listaOrganizador = this.NOrganizador.listarOrganizadores();
        let listaCategoria = this.NCategoria.listarCategoria();
        let listaEvento = this.NEvento.listarEvento(listaCategoria, listaOrganizador);
        

        let evento = listaEvento.find(evento => evento.id === id);

        let tituloEvento = document.getElementById('titulo');
        let descripcionEvento = document.getElementById('descripcion');
        let direccionEvento = document.getElementById('direccion');
        let fechaEvento = document.getElementById('fecha');
        let selectOrganizador = document.getElementById('organizador');
        let selectCategoria = document.getElementById('categoria');
        let idEvento = document.getElementById('id');

        let htmlOrganizador = '';
        listaOrganizador.forEach(organizador => {
            if (organizador.id === evento.fk_organizador) {
                htmlOrganizador += `<option value="${organizador.id}" selected>${organizador.nombre + " " + organizador.apellido}</option>`;
            }else{
                htmlOrganizador += `<option value="${organizador.id}">${organizador.nombre + " " + organizador.apellido}</option>`;
            }
        });

        selectOrganizador.innerHTML = htmlOrganizador;
        let htmlCategoria = '';

        listaCategoria.forEach(categoria => {
            if (categoria.id === evento.fk_categoria) {
                htmlCategoria += `<option value="${categoria.id}" selected>${categoria.nombre}</option>`;
            }else{
                htmlCategoria += `<option value="${categoria.id}">${categoria.nombre}</option>`;
            }
        });
        selectCategoria.innerHTML = htmlCategoria;

        idEvento.value = id;
        tituloEvento.value = evento.titulo;
        descripcionEvento.value = evento.descripcion;
        direccionEvento.value = evento.direccion;
        fechaEvento.value = evento.fecha;
    }

    actualizarEvento(id){
        let tituloEvento = document.getElementById('titulo');
        let descripcionEvento = document.getElementById('descripcion');
        let direccionEvento = document.getElementById('direccion');
        let fechaEvento = document.getElementById('fecha');
        let idOrganizadorEvento = document.getElementById('organizador');
        let idCategoriaEvento = document.getElementById('categoria');
        let idEvento = document.getElementById('id');
        let mensaje = document.getElementById('error');

        let resultado = this.NEvento.actualizarEvento(
            id,
            tituloEvento.value,
            descripcionEvento.value,
            direccionEvento.value,
            fechaEvento.value,
            idOrganizadorEvento.value,
            idCategoriaEvento.value
        );

        if (resultado === true) {
            tituloEvento.value = "";
            descripcionEvento.value = "";
            direccionEvento.value = "";
            fechaEvento.value = "";
            idOrganizadorEvento.value = "";
            idCategoriaEvento.value = "";
            idEvento.value = "";
            mensaje.innerHTML = "";
        } else {
            mensaje.innerHTML = resultado;
        }
    }

    eliminarEvento(id){
        let mensaje = document.getElementById('error');
        let resultado = this.NEvento.eliminarEvento(id);
        if (resultado === true) {
            mensaje.innerHTML = "";
        } else {
            mensaje.innerHTML = resultado;
        }
    }
}