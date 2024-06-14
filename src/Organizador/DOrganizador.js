export default class DOrganizador {

    constructor() {

    }

    insert(
        nombre,
        apellido,
        telefono,
        empresa,
    ) {
        let listaOrganizadorStorage = localStorage.getItem("organizadores")
        let listaOrganizadores = []

        if (listaOrganizadorStorage !== null
            && listaOrganizadorStorage !== undefined
            && listaOrganizadorStorage !== "") {
            listaOrganizadores = JSON.parse(listaOrganizadorStorage)

        }

        listaOrganizadores.push({
            id: listaOrganizadores.length === 0 ? 1 : listaOrganizadores[listaOrganizadores.length - 1].id + 1,
            nombre,
            apellido,
            telefono,
            empresa,
        })

        localStorage.setItem("organizadores", JSON.stringify(listaOrganizadores))
    }

    select() {
        let listaOrganizadorStorage = localStorage.getItem("organizadores")
        let listaOrganizadores = []

        if (listaOrganizadorStorage !== null
            && listaOrganizadorStorage !== undefined
            && listaOrganizadorStorage !== "") {
            listaOrganizadores = JSON.parse(listaOrganizadorStorage)
        }

        return listaOrganizadores
    }

    update(
        id,
        nombre,
        apellido,
        telefono,
        empresa,
    ) {
        let listaOrganizadorStorage = localStorage.getItem("organizadores")
        let listaOrganizadores = []

        if (listaOrganizadorStorage !== null
            && listaOrganizadorStorage !== undefined
            && listaOrganizadorStorage !== "") {
            listaOrganizadores = JSON.parse(listaOrganizadorStorage)
        }

        let organizador = listaOrganizadores.find(organizador => organizador.id === parseInt(id))
        organizador.nombre = nombre,
            organizador.apellido = apellido
        organizador.telefono = telefono
        organizador.empresa = empresa

        localStorage.setItem("organizadores", JSON.stringify(listaOrganizadores))
    }

    delete(id) {
        let listaOrganizadorStorage = localStorage.getItem("organizadores")
        let listaOrganizadores = []

        if (listaOrganizadorStorage !== null
            && listaOrganizadorStorage !== undefined
            && listaOrganizadorStorage !== "") {
            listaOrganizadores = JSON.parse(listaOrganizadorStorage)
        }

        let index = listaOrganizadores.findIndex(organizador => organizador.id === parseInt(id))
        listaOrganizadores.splice(index,1)

        localStorage.setItem("organizadores",JSON.stringify(listaOrganizadores))
    }
}