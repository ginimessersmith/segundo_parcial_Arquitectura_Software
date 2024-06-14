export default class DCatgoria {

    constructor() {
    }

    insert(nombre, descripcion,) {
        let listaCategoriasStorage = localStorage.getItem("categorias");
        let listaCategoria = [];

        if (listaCategoriasStorage !== null && listaCategoriasStorage !== undefined
            && listaCategoriasStorage !== "") {
            listaCategoria = JSON.parse(listaCategoriasStorage);
        }

        listaCategoria.push({
            id: listaCategoria.length === 0 ? 1 : listaCategoria[listaCategoria.length - 1].id + 1,
            nombre,
            descripcion
        });
        localStorage.setItem("categorias", JSON.stringify(listaCategoria));
    }

    select() {
        let listaCategoriasStorage = localStorage.getItem("categorias");
        let listaCategoria = [];

        if (listaCategoriasStorage !== null && listaCategoriasStorage !== undefined
            && listaCategoriasStorage !== "") {
            listaCategoria = JSON.parse(listaCategoriasStorage);
        }

        return listaCategoria;
    }

    update(id, nombre, descripcion) {
        let listaCategoriasStorage = localStorage.getItem("categorias");
        let listaCategoria = [];

        if (listaCategoriasStorage !== null && listaCategoriasStorage !== undefined
            && listaCategoriasStorage !== "") {
            listaCategoria = JSON.parse(listaCategoriasStorage);
        }

        let categoria = listaCategoria.find(categoria => categoria.id === parseInt(id));
        categoria.nombre = nombre;
        categoria.descripcion = descripcion;

        localStorage.setItem("categorias", JSON.stringify(listaCategoria));
    }

    delete(id) {
        let listaCategoriasStorage = localStorage.getItem("categorias");
        let listaCategoria = [];

        if (listaCategoriasStorage !== null && listaCategoriasStorage !== undefined
            && listaCategoriasStorage !== "") {
            listaCategoria = JSON.parse(listaCategoriasStorage);
        }

        let index = listaCategoria.findIndex(categoria => categoria.id === parseInt(id));
        listaCategoria.splice(index, 1);

        localStorage.setItem("categorias", JSON.stringify(listaCategoria));
    }


    findOne(id) {
        let listaCategoriasStorage = localStorage.getItem("categorias");
        let listaCategoria = [];

        if (listaCategoriasStorage !== null && listaCategoriasStorage !== undefined
            && listaCategoriasStorage !== "") {
            listaCategoria = JSON.parse(listaCategoriasStorage);
        }

        let categoria = listaCategoria.find(categoria => categoria.id === parseInt(id));
        return categoria;
    }



}