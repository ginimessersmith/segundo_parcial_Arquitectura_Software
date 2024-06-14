
import ValidationStrategy from "../interface/validationStrategy.js";

export default class EventoValidationStrategy extends ValidationStrategy {

  validate(data) {

    const { titulo,
        descripcion,
        direccion,
        fecha,
        idOrganizador,
        idCategoria } = data;

    if (titulo.trim() === "") {
        return "El titulo es requerido"
    }else if (descripcion.trim() === "") {
        return "La descripcion es requerida"
    }else if (direccion.trim() === "") {
        return "La direccion es requerida"
    }else if (fecha.trim() === "") {
        return "La fecha es requerida"
    }else if (isNaN(idOrganizador) || idOrganizador.trim() === "" || idOrganizador === null) {
        return "Debe elegir un organizador"
    }else if (isNaN(idCategoria) || idCategoria.trim() === "" || idCategoria === null) {
        return "Debe elegir una categoria"
    }

    return ''

  }

}
