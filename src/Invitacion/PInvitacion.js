import NEvento from "../Evento/NEvento.js";
import NInvitado from "../Invitado/NInvitado.js";
import NInvitacion from "./NInvitacion.js";

export default class PInvitacion {
    NEvento = new NEvento
    NInvitado = new NInvitado
    NInvitacion = new NInvitacion

    constructor() { }

    clickGuardar() {
        let idInvitacion = document.getElementById('id')
        if (idInvitacion.value === "") {
            this.agregarInvitacion()
        } else {
            this.actualizarInvitacion(idInvitacion.value)
        }
    }

    agregarInvitacion() {
        let nombre = document.getElementById('nombre')
        let descripcion = document.getElementById('descripcion')
        let estado = document.getElementById('estado')
        let idInvitado = document.getElementById('invitado')
        let idEvento = document.getElementById('evento')
        let mensaje = document.getElementById('error')

        let resultado = this.NInvitacion.agregarInvitacion(
            nombre.value,
            descripcion.value,
            estado.checked,
            idInvitado.value,
            idEvento.value,
        )

        if (resultado === true) {
            nombre.value = ""
            descripcion.value = ""
            estado.checked = false
            idInvitado.value = ""
            idEvento.value = ""
            mensaje.innerHTML = ""
        } else {
            mensaje.innerHTML = resultado
        }
    }

    listarInvitacion() {
        let tableBody = document.getElementById('tabla-invitaciones')
        let selectInvitado = document.getElementById('invitado')
        let selectEvento = document.getElementById('evento')

        let listaInvitado = this.NInvitado.listarInvitado()
        let listaEventos = this.NEvento.listarEvento([], [])

        let listaInvitaciones = this.NInvitacion.listaInvitacion(listaInvitado, listaEventos)

        let html = ''

        listaInvitaciones.forEach(invitacion => {
            html += `<tr>
                        <td>${invitacion.id}</td>
                        <td>${invitacion.nombre}</td>
                        <td>${invitacion.descripcion}</td>
                        <td>${invitacion.estado ? "Activo" : "Inactivo"}</td>
                        <td>${invitacion.invitado}</td>
                        <td>${invitacion.evento}</td>
                        <td>
                            <button onclick="editarInvitacion(${invitacion.id})">Editar</button>
                            <button onclick="eliminarInvitacion(${invitacion.id})">Eliminar</button>
                        </td>
                    </tr>`;
        })

        tableBody.innerHTML = html

        let htmlInvitado = ''

        listaInvitado.forEach(invitado => {
            htmlInvitado += `<option value="${invitado.id}">${invitado.nombre + " " + invitado.apellido}</option>`;
        })

        selectInvitado.innerHTML = htmlInvitado

        let htmlEvento = ''

        listaEventos.forEach(evento => {
            htmlEvento += `<option value="${evento.id}">${evento.titulo}</option>`;
        })

        selectEvento.innerHTML = htmlEvento
    }

    editarInvitacion(id) {

        let nombre = document.getElementById('nombre')
        let descripcion = document.getElementById('descripcion')
        let estado = document.getElementById('estado')
        let idInvitacion = document.getElementById('id')
        let selectInvitado = document.getElementById('invitado')
        let selectEvento = document.getElementById('evento')

        let listaInvitado = this.NInvitado.listarInvitado()
        let listaEventos = this.NEvento.listarEvento([], [])

        let listaInvitaciones = this.NInvitacion.listaInvitacion(listaInvitado, listaEventos)
        let invitacion = listaInvitaciones.find(invitacion => invitacion.id === id)

        let htmlInvitado = ''
        listaInvitado.forEach(invitado => {
            if (invitado.id === invitacion.fk_invitado) {
                htmlInvitado += `<option value="${invitado.id}" selected>${invitado.nombre + " " + invitado.apellido}</option>`
            } else {
                htmlInvitado += `<option value="${invitado.id}">${invitado.nombre + " " + invitado.apellido}</option>`
            }
        })
        selectInvitado.innerHTML = htmlInvitado

        let htmlEvento = ''
        listaEventos.forEach(evento => {
            if (evento.id === invitacion.fk_evento) {
                htmlEvento += `<option value="${evento.id}" selected>${evento.titulo}</option>`
            } else {
                htmlEvento += `<option value="${evento.id}">${evento.titulo}</option>`
            }
        })
        selectEvento.innerHTML = htmlEvento

        idInvitacion.value = id
        nombre.value = invitacion.nombre
        descripcion.value = invitacion.descripcion
        estado.checked = invitacion.estado
    }

    actualizarInvitacion(id){
        let nombre = document.getElementById('nombre')
        let descripcion = document.getElementById('descripcion')
        let estado = document.getElementById('estado')
        let idInvitado = document.getElementById('invitado')
        let idEvento = document.getElementById('evento')
        let idInvitacion = document.getElementById('id')
        let mensaje = document.getElementById('error')

        let resultado = this.NInvitacion.actualizarInvitacion(
            id,
            nombre.value,
            descripcion.value,
            estado.checked,
            idInvitado.value,
            idEvento.value,
        )

        if (resultado === true) {
            nombre.value = ""
            descripcion.value = ""
            estado.checked = false
            idInvitado.value = ""
            idEvento.value = ""
            idInvitacion.value = ""
            mensaje.innerHTML = ""
        } else {
            mensaje.innerHTML = resultado
        } 
    }

    eliminarInvitacion(id) {
        this.NInvitacion.eliminarInvitacion(id)
    }
}