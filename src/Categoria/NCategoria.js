import DCategoria from "./DCategoria.js";
import DEvento from "../Evento/DEvento.js";
import Validator from "../Strategy/context/contextValidators.js";
import Invoker from "./Commands/Invoker.js";
import CreateCommand from "./Commands/CreateCommand.js";
import DeleteCommand from "./Commands/DeleteCommand.js";


export default class NCategoria {
    DCategoria = new DCategoria()
    DEvento = new DEvento()
    validator = new Validator()
    constructor() {
        this.invoker = new Invoker()
    }


    agregarCategoria(nombre, descripcion) {

        const data = { nombre, descripcion }
        // this.validator.setStrategy(new CategoryValidationStrategy());
        // const validation = this.validator.validate(data)
        if (nombre.trim() === "" || nombre == undefined) {
            return "El nombre no puede estar vacío";
        } else if (descripcion.trim() === "" || descripcion == undefined) {
            return "La descripción no puede estar vacía";
        }
        // console.log({ validation })
        const cmd = new CreateCommand(data)
        this.invoker.setCommand(cmd)
        this.invoker.executeCommand()
        return true

    }

    deshacer() {
        this.invoker.undoCommand()
    }
    listarCategoria() {
        try {
            return this.DCategoria.select();
        } catch (error) {
            console.error(error);
        }
    }

    actualizarCategoria(id, nombre, descripcion) {
        try {

            if (id === "") {
                return "El id no puede estar vacio";
            } else if (nombre.trim() === "") {
                return "El nombre no puede estar vacio";
            } else if (descripcion.trim() === "") {
                return "La descripcion no puede estar vacia";
            }

            this.DCategoria.update(
                id,
                nombre,
                descripcion
            );

            return true;
        } catch (error) {
            console.error(error);
        }
    }

    eliminarCategoria(id) {
        try {
            let eventos = this.DEvento.select([], []);
            let eventosCategoria = eventos.filter(evento => evento.fk_categoria === id);
            if (eventosCategoria.length > 0) {
                return "No se puede eliminar la categoria porque tiene eventos asociados";
            }
            // this.DCategoria.delete(id);
            const data = { id }
            const cmd = new DeleteCommand(data)
            this.invoker.setCommand(cmd)
            this.invoker.executeCommand()
            return true;
        } catch (error) {
            console.error(error);
        }
    }
}