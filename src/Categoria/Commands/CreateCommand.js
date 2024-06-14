import DCatgoria from "../DCategoria.js";
import Command from "./Command.js";

export default class CreateCommand extends Command {

    constructor(data) {
        super()
        this.dCategory = new DCatgoria()
        this.data = data;
    }
    execute() {
        const { nombre, descripcion } = this.data
        this.dCategory.insert(nombre, descripcion)
    }

    undo() {
        const { id } = this.data
        this.dCategory.delete(id)
    }

}