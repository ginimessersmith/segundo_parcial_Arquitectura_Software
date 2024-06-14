import DCatgoria from "../DCategoria.js";
import Command from "./Command.js";

export default class DeleteCommand extends Command {

    // const localData = 

    constructor(data) {
        super()
        this.dCategory = new DCatgoria()
        const {id} = data
        this.data = this.dCategory.findOne(id);
        // this.data = data;
    }

    execute() {
        const { id } = this.data
        this.dCategory.delete(id)
    }

    undo() {
        const { nombre, descripcion } = this.data
        this.dCategory.insert(nombre, descripcion)
    }

}