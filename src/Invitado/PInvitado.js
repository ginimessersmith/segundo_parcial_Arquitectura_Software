import NInvitado from './NInvitado.js';

export default class PInvitado {
    NInvitado = new NInvitado();
    constructor() {
    }

    clickGuardar(){
        let idInvitado = document.getElementById('id');
        if (idInvitado.value === "") {
            this.agregarInvitado();
        } else {
            this.actualizarInvitado(idInvitado.value);
        }
    }

    agregarInvitado(){
        let nombreInvitado = document.getElementById('nombre');
        let apellidoInvitado = document.getElementById('apellido');
        let edadInvitado = document.getElementById('edad');
        let telefonoInvitado = document.getElementById('telefono');
        let mensaje = document.getElementById('error');

        let respuesta = this.NInvitado.agregarInvitado(
            nombreInvitado.value,
            apellidoInvitado.value,
            edadInvitado.value,
            telefonoInvitado.value
        );

        if (respuesta === true) {
            nombreInvitado.value = "";
            apellidoInvitado.value = "";
            edadInvitado.value = "";
            telefonoInvitado.value = "";
            mensaje.innerHTML = "";
        }else{
            mensaje.innerHTML = respuesta;
        }
    }

    listarInvitado(){
        let tableBody = document.getElementById('tabla-invitados');
        let listaInvitado = this.NInvitado.listarInvitado();
        let html = '';
        listaInvitado.forEach(invitado => {
            html += `<tr>
                        <td>${invitado.id}</td>
                        <td>${invitado.nombre}</td>
                        <td>${invitado.apellido}</td>
                        <td>${invitado.edad}</td>
                        <td>${invitado.telefono}</td>
                        <td>
                            <button onclick="editarInvitado(${invitado.id})">Editar</button>
                            <button onclick="eliminarInvitado(${invitado.id})">Eliminar</button>
                        </td>
                    </tr>`;
        });
        tableBody.innerHTML = html;
    }

    editarInvitado(id){
        let listaInvitado = this.NInvitado.listarInvitado();
        let invitado = listaInvitado.find(invitado => invitado.id === id);

        let nombreInvitado = document.getElementById('nombre');
        let apellidoInvitado = document.getElementById('apellido');
        let edadInvitado = document.getElementById('edad');
        let telefonoInvitado = document.getElementById('telefono');
        let idInvitado = document.getElementById('id');

        idInvitado.value = invitado.id;
        nombreInvitado.value = invitado.nombre;
        apellidoInvitado.value = invitado.apellido;
        edadInvitado.value = invitado.edad;
        telefonoInvitado.value = invitado.telefono;
    }

    actualizarInvitado(id){
        let nombreInvitado = document.getElementById('nombre');
        let apellidoInvitado = document.getElementById('apellido');
        let edadInvitado = document.getElementById('edad');
        let telefonoInvitado = document.getElementById('telefono');
        let idInvitado = document.getElementById('id');
        let mensaje = document.getElementById('error');

        let resultado = this.NInvitado.actualizarInvitado(
            id,
            nombreInvitado.value,
            apellidoInvitado.value,
            edadInvitado.value,
            telefonoInvitado.value
        );

        if (resultado === true) {
            nombreInvitado.value = "";
            apellidoInvitado.value = "";
            edadInvitado.value = "";
            telefonoInvitado.value = "";
            idInvitado.value = "";
            mensaje.innerHTML = "";
        }else{
            mensaje.innerHTML = resultado;
        }
    }

    eliminarInvitado(id){
        let mensaje = document.getElementById('error');
        let resultado = this.NInvitado.eliminarInvitado(id);
        if (resultado === true) {
            mensaje.innerHTML = "";
        }else{
            mensaje.innerHTML = resultado;
        }
    }

}

