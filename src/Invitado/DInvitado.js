export default class DINvitado {
    
    constructor() {
    }

    insert(
        nombre, apellido, edad, telefono
    ) {
        let listaInvitadosStorage = localStorage.getItem("invitados");
        let listaInvitados = [];

        if (listaInvitadosStorage !== null && listaInvitadosStorage !== undefined 
            && listaInvitadosStorage !== ""){
            listaInvitados = JSON.parse(listaInvitadosStorage);
        }

        listaInvitados.push({
            id: listaInvitados.length === 0? 1:listaInvitados[listaInvitados.length-1].id+1,
            nombre,
            apellido,
            edad,
            telefono
        });
        localStorage.setItem("invitados", JSON.stringify(listaInvitados));
    }

    select() {
        let listaInvitadosStorage = localStorage.getItem("invitados");
        let listaInvitados = [];

        if (listaInvitadosStorage !== null && listaInvitadosStorage !== undefined 
            && listaInvitadosStorage !== ""){
            listaInvitados = JSON.parse(listaInvitadosStorage);
        }

        return listaInvitados;
    }

    update(
        id,
        nombre,
        apellido,
        edad,
        telefono
    ){
        let listaInvitadosStorage = localStorage.getItem("invitados");
        let listaInvitados = [];

        if (listaInvitadosStorage !== null && listaInvitadosStorage !== undefined 
            && listaInvitadosStorage !== ""){
            listaInvitados = JSON.parse(listaInvitadosStorage);
        }

        let invitado = listaInvitados.find(invitado => invitado.id === parseInt(id));
        invitado.nombre = nombre;
        invitado.apellido = apellido;
        invitado.edad = edad;
        invitado.telefono = telefono;

        localStorage.setItem("invitados", JSON.stringify(listaInvitados));
    }

    delete(id){
        let listaInvitadosStorage = localStorage.getItem("invitados");
        let listaInvitados = [];

        if (listaInvitadosStorage !== null && listaInvitadosStorage !== undefined 
            && listaInvitadosStorage !== ""){
            listaInvitados = JSON.parse(listaInvitadosStorage);
        }

        let index = listaInvitados.findIndex(invitado => invitado.id === parseInt(id));
        listaInvitados.splice(index, 1);

        localStorage.setItem("invitados", JSON.stringify(listaInvitados));
    }
}