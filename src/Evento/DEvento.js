export default class DEvento {

    constructor() {
    }

    insert(
        titulo,
        descripcion,
        direccion,
        fecha,
        idOrganizador,
        idCategoria
    ) {
        let listaEventosStorage = localStorage.getItem("eventos");
        let listaEventos = [];

        if (listaEventosStorage !== null && listaEventosStorage !== undefined
            && listaEventosStorage !== "") {
            listaEventos = JSON.parse(listaEventosStorage);
        }

        listaEventos.push({
            id: listaEventos.length === 0 ? 1 : listaEventos[listaEventos.length - 1].id + 1,
            titulo,
            descripcion,
            direccion,
            fecha,
            fk_organizador: parseInt(idOrganizador),
            fk_categoria: parseInt(idCategoria)
        });
        localStorage.setItem("eventos", JSON.stringify(listaEventos));
    }

    select(listaCategorias, listaOrganizadores) {

        let listaEventosStorage = localStorage.getItem("eventos");
        let listaEventos = [];

        if (listaEventosStorage !== null && listaEventosStorage !== undefined
            && listaEventosStorage !== "") {
            listaEventos = JSON.parse(listaEventosStorage);
        }

        if (listaEventos.length > 0) {
            listaEventos = listaEventos.map(evento => {
                if (listaCategorias.length === 0 && listaOrganizadores.length === 0) return evento
                let categoriaObj = listaCategorias.find(categoria => categoria.id === evento.fk_categoria);
                let organizadorObj = listaOrganizadores.find(organizador => organizador.id === evento.fk_organizador);

                evento.categoria = categoriaObj.nombre;
                evento.organizador = organizadorObj.nombre + " " + organizadorObj.apellido;
                return evento;
            });
        }

        return listaEventos;
    }

    update(
        id,
        titulo,
        descripcion,
        direccion,
        fecha,
        idOrganizador,
        idCategoria
    ) {

        let listaEventosStorage = localStorage.getItem("eventos");
        let listaEventos = [];

        if (listaEventosStorage !== null && listaEventosStorage !== undefined
            && listaEventosStorage !== "") {
            listaEventos = JSON.parse(listaEventosStorage);
        }

        let evento = listaEventos.find(evento => evento.id === parseInt(id));
        evento.titulo = titulo;
        evento.descripcion = descripcion;
        evento.direccion = direccion;
        evento.fecha = fecha;
        evento.fk_organizador = parseInt(idOrganizador);
        evento.fk_categoria = parseInt(idCategoria);

        localStorage.setItem("eventos", JSON.stringify(listaEventos));
    }

    delete(id) {
        let listaEventosStorage = localStorage.getItem("eventos");
        let listaEventos = [];

        if (listaEventosStorage !== null && listaEventosStorage !== undefined
            && listaEventosStorage !== "") {
            listaEventos = JSON.parse(listaEventosStorage);
        }

        listaEventos = listaEventos.filter(evento => evento.id !== parseInt(id));

        localStorage.setItem("eventos", JSON.stringify(listaEventos));
    }
}