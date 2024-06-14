
import ValidationStrategy from "../interface/validationStrategy.js";

export default class InvitadoValidationStrategy extends ValidationStrategy {

  validate(data) {

    const { nombre, descripcion, estado, idInvitado,idEvento } = data;
    if (nombre.trim() === "") {
        return "El nombre es requerido"
    } else if (descripcion.trim() === "") {
        return "La descripcion es requerida"
    } else if (estado === undefined || estado === null) {
        return "La estado es requerida"
    } else if (isNaN(idInvitado) || idInvitado.trim() === "" || idInvitado === null) {
        return "Debe elegir un Invitado"
    } else if (isNaN(idEvento) || idEvento.trim() === "" || idEvento === null) {
        return "Debe elegir una Evento"
    }


    return ''

  }

}
