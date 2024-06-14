export default class DInvitacion {
    constructor() { }

    insert(
        nombre,
        descripcion,
        estado,
        idInvitado,
        idEvento
    ) {
        let listaInvitacionStorage = localStorage.getItem("invitaciones")
        let listaInvitaciones = []

        if (
            listaInvitacionStorage !== null
            && listaInvitacionStorage !== undefined
            && listaInvitacionStorage !== ""
        ) {
            listaInvitaciones = JSON.parse(listaInvitacionStorage)
        }

        listaInvitaciones.push({
            id: listaInvitaciones.length === 0 ? 1 : listaInvitaciones[listaInvitaciones.length - 1].id + 1,
            nombre,
            descripcion,
            estado,
            fk_invitado: parseInt(idInvitado),
            fk_evento: parseInt(idEvento)
        })

        localStorage.setItem("invitaciones", JSON.stringify(listaInvitaciones))
    }

    select(listaInvitados, listaEventos) {
        let listaInvitacionStorage = localStorage.getItem("invitaciones")
        let listaInvitaciones = []

        if (
            listaInvitacionStorage !== null
            && listaInvitacionStorage !== undefined
            && listaInvitacionStorage !== ""
        ) {
            listaInvitaciones = JSON.parse(listaInvitacionStorage)
        }

        if (listaInvitaciones.length > 0) {
            listaInvitaciones = listaInvitaciones.map(invitacion => {

                if (listaInvitados.length === 0 && listaEventos.length === 0) return invitacion;

                let eventoObj = listaEventos.find(evento => evento.id === invitacion.fk_evento)
                let invitadoObj = listaInvitados.find(invitado => invitado.id === invitacion.fk_invitado)

                invitacion.evento = eventoObj.titulo,
                invitacion.invitado = invitadoObj.nombre + " " + invitadoObj.apellido
                return invitacion
            })
        }
        return listaInvitaciones
    }

    update(
        id,
        nombre,
        descripcion,
        estado,
        idInvitado,
        idEvento
    ){
        let listaInvitacionStorage = localStorage.getItem("invitaciones")
        let listaInvitaciones = []

        if (
            listaInvitacionStorage !== null
            && listaInvitacionStorage !== undefined
            && listaInvitacionStorage !== ""
        ) {
            listaInvitaciones = JSON.parse(listaInvitacionStorage)
        }

        let invitacion = listaInvitaciones.find(invitacion => invitacion.id ===parseInt(id))
        invitacion.nombre = nombre
        invitacion.descripcion = descripcion
        invitacion.estado = estado
        invitacion.fk_invitado = parseInt(idInvitado)
        invitacion.fk_evento = parseInt(idEvento)

        localStorage.setItem("invitaciones",JSON.stringify(listaInvitaciones))
    }

    delete(id){
        let listaInvitacionStorage = localStorage.getItem("invitaciones")
        let listaInvitaciones = []

        if (
            listaInvitacionStorage !== null
            && listaInvitacionStorage !== undefined
            && listaInvitacionStorage !== ""
        ) {
            listaInvitaciones = JSON.parse(listaInvitacionStorage)
        }

        listaInvitaciones = listaInvitaciones.filter(invitacion => invitacion.id !== parseInt(id))

        localStorage.setItem("invitaciones", JSON.stringify(listaInvitaciones))
    }
}