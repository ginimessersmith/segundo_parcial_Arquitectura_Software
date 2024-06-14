import NOrganizador from "./NOrganizador.js";

export default class POrganizador {

    NOrganizador = new NOrganizador()
    constructor() { }

    clickGuardar() {
        let idOrganizador = document.getElementById('id');
        if (idOrganizador.value === "") {
            this.agregarOrganizador();
        } else {
            this.actualizarOrganizador(idOrganizador.value);
        }
    }

    agregarOrganizador() {
        let nombreOrganizador = document.getElementById('nombre')
        let apellidoOrganizador = document.getElementById('apellido')
        let telefonoOrganizador = document.getElementById('telefono')
        let empresaOrganizador = document.getElementById('empresa')
        let mensaje = document.getElementById('error')

        let respuesta = this.NOrganizador.agregarOrganizador(
            nombreOrganizador.value,
            apellidoOrganizador.value,
            telefonoOrganizador.value,
            empresaOrganizador.value
        )

        if (respuesta === true) {
            nombreOrganizador.value = "";
            apellidoOrganizador.value = "";
            telefonoOrganizador.value = "";
            empresaOrganizador.value = "";
            mensaje.innerHTML = "";
        }else{
            mensaje.innerHTML = respuesta;
        }
    }

    listarOrganizadores() {
        let tableBody = document.getElementById('tabla-organizador')
        let listaOrganizadores = this.NOrganizador.listarOrganizadores()
        let html = ''

        listaOrganizadores.forEach(organizador => {
            html += `<tr>
            <td>${organizador.id}</td>
            <td>${organizador.nombre}</td>
            <td>${organizador.apellido}</td>
            <td>${organizador.telefono}</td>
            <td>${organizador.empresa}</td>
            <td>
                <button onclick="editarOrganizador(${organizador.id})">Editar</button>
                <button onclick="eliminarOrganizador(${organizador.id})">Eliminar</button>
            </td>
        </tr>`
        })

        tableBody.innerHTML = html
    }

    editarOrganizador(id){
        let listaOrganizador = this.NOrganizador.listarOrganizadores()
        let organizador = listaOrganizador.find(organizador => organizador.id ===id)

        let nombreOrganizador = document.getElementById('nombre')
        let apellidoOrganizador = document.getElementById('apellido')
        let telefonoOrganizador = document.getElementById('telefono')
        let empresaOrganizador = document.getElementById('empresa')
        let idOrganizador = document.getElementById('id')

        idOrganizador.value = organizador.id
        nombreOrganizador.value = organizador.nombre
        apellidoOrganizador.value = organizador.apellido
        telefonoOrganizador.value = organizador.telefono
        empresaOrganizador.value = organizador.empresa
    }

    actualizarOrganizador(id){
        let nombreOrganizador = document.getElementById('nombre')
        let apellidoOrganizador = document.getElementById('apellido')
        let telefonoOrganizador = document.getElementById('telefono')
        let empresaOrganizador = document.getElementById('empresa')
        let idOrganizador = document.getElementById('id');
        let mensaje = document.getElementById('error');

        let resultado = this.NOrganizador.actualizarOrganizador(
            id,
            nombreOrganizador.value,
            apellidoOrganizador.value,
            telefonoOrganizador.value,
            empresaOrganizador.value,
        )

        if (resultado === true) {
            nombreOrganizador.value = "";
            apellidoOrganizador.value = "";
            telefonoOrganizador.value = "";
            empresaOrganizador.value = "";
            idOrganizador.value = "";
            mensaje.innerHTML = "";
        }else{
            mensaje.innerHTML = resultado;
        }
    }

    eliminarOrganizador(id){
        let mensaje = document.getElementById('error')
        let  resultado = this.NOrganizador.eliminarOrganizador(id)
        if (resultado === true) {
            mensaje.innerHTML = ""
        }else{
            mensaje.innerHTML = resultado
        }
    }
}