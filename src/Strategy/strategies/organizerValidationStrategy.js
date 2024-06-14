
import ValidationStrategy from "../interface/validationStrategy.js";

export default class OrganizerValidationStrategy extends ValidationStrategy {

  validate(data) {

    const { nombre, apellido, telefono, empresa } = data;
    console.log({data})
    if (nombre.trim() === "") {
      return("El nombre no puede estar vacío");
    } else if (apellido.trim() === "") {
      return ("El apellido no puede estar vacío");
    } else if (telefono.trim() === "" || isNaN(telefono)) {
      return ("El teléfono no puede estar vacío y debe ser un número");
    } else if (empresa.trim() === "") {
      return ("La empresa no puede estar vacía");
    }

    return ''

  }

}
