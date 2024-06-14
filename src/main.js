import PCategoria from "./Categoria/PCategoria.js"
import PInvitado from "./Invitado/PInvitado.js"
import POrganizador from "./Organizador/POrganizador.js";
import PEvento from "./Evento/PEvento.js";
import PInvitacion from "./Invitacion/PInvitacion.js";


const categoriaObj = new PCategoria();
const invitadoObj = new PInvitado();
const organizadorObj = new POrganizador();
const eventoObj = new PEvento();
const invitacionObj = new PInvitacion()

//?---------------------------------------------------------------------- Categorias
function guardarCategoria() {
    categoriaObj.clickGuardar()
    listarCategoria();
}

function deshacerCategoria() {
    categoriaObj.clickDeshacer();
    listarCategoria();
}


function listarCategoria() {
    categoriaObj.listarCategoria();
}

function editarCategoria(id) {
    categoriaObj.editarCategoria(id);
};

function eliminarCategoria(id) {
    categoriaObj.eliminarCategoria(id);
    listarCategoria();
};

//?---------------------------------------------------------------------- Invitados

function guardarInvitado() {
    invitadoObj.clickGuardar();
    listarInvitado();
}

function listarInvitado() {
    invitadoObj.listarInvitado();
}

function editarInvitado(id) {
    invitadoObj.editarInvitado(id);
}

function eliminarInvitado(id) {
    invitadoObj.eliminarInvitado(id);
    listarInvitado();
}

//?---------------------------------------------------------------------- Organizador
function guardarOrganizador() {
    organizadorObj.clickGuardar();
    listarOrganizadores()
}

function listarOrganizadores() {
    organizadorObj.listarOrganizadores();
}

function editarOrganizador(id) {
    organizadorObj.editarOrganizador(id);
}

function eliminarOrganizador(id) {
    organizadorObj.eliminarOrganizador(id);
    listarOrganizadores();
}

//?---------------------------------------------------------------------- Eventos

function guardarEvento() {
    eventoObj.clickGuardar();
    listarEvento();
}

function listarEvento() {
    eventoObj.listarEvento();
}

function editarEvento(id) {
    eventoObj.editarEvento(id);
}

function eliminarEvento(id) {
    eventoObj.eliminarEvento(id);
    listarEvento();
}

//?---------------------------------------------------------------------- Invitacion

function guardarInvitacion() {
    invitacionObj.clickGuardar()
    listarInvitaciones()
}

function listarInvitaciones() {
    invitacionObj.listarInvitacion()
}

function editarInvitacion(id) {
    invitacionObj.editarInvitacion(id)
}

function eliminarInvitacion(id) {
    invitacionObj.eliminarInvitacion(id)
    listarInvitaciones()
}

window.guardarCategoria = guardarCategoria;
window.listarCategoria = listarCategoria;
window.editarCategoria = editarCategoria;
window.eliminarCategoria = eliminarCategoria;
window.deshacerCategoria = deshacerCategoria;

window.guardarInvitado = guardarInvitado;
window.listarInvitado = listarInvitado;
window.editarInvitado = editarInvitado;
window.eliminarInvitado = eliminarInvitado;

window.guardarOrganizador = guardarOrganizador;
window.listarOrganizadores = listarOrganizadores;
window.editarOrganizador = editarOrganizador;
window.eliminarOrganizador = eliminarOrganizador;

window.guardarEvento = guardarEvento;
window.listarEventos = listarEvento;
window.editarEvento = editarEvento;
window.eliminarEvento = eliminarEvento;

window.guardarInvitacion = guardarInvitacion
window.listarInvitaciones = listarInvitaciones
window.editarInvitacion = editarInvitacion
window.eliminarInvitacion = eliminarInvitacion