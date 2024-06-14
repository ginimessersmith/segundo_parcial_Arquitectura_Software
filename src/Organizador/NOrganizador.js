import DOrganizador from "./DOrganizador.js";
import DEvento from "../Evento/DEvento.js";
import Validator from "../Strategy/context/contextValidators.js";
import OrganizerValidationStrategy from "../Strategy/strategies/organizerValidationStrategy.js";

export default class NOrganizador {
    DOrganizador = new DOrganizador()
    DEvento = new DEvento()
    validator = new Validator()

    constructor() {

    }

    agregarOrganizador(
        nombre,
        apellido,
        telefono,
        empresa
    ) {
        
        try {

            const data = {nombre,
                apellido,
                telefono,
                empresa}

            this.validator.setStrategy(new OrganizerValidationStrategy())
            const validation = this.validator.validate(data)

            if(validation){
                return validation
            }else{
                this.DOrganizador.insert(
                    nombre,
                    apellido,
                    telefono,
                    empresa
                )
                return true

            }

            
        } catch (error) {
            console.log(error)
        }

    }

    listarOrganizadores() {
        try {
            return this.DOrganizador.select()
        } catch (error) {
            console.log(error)
        }
    }

    actualizarOrganizador(
        id,
        nombre,
        apellido,
        telefono,
        empresa,
    ) {
        try {
            if (nombre.trim() === "") {
                return "El nombre no puede estar vacio";
            } else if (apellido.trim() === "") {
                return "El apellido no puede estar vacio";
            } else if (telefono.trim() === "" || isNaN(telefono)) {
                return "El telefono no puede estar vacio y debe ser un numero";
            } else if (empresa.trim() === "") {
                return "La empresa no puede estar vacia";
            }

            this.DOrganizador.update(
                id,
                nombre,
                apellido,
                telefono,
                empresa,
            )
            return true
        } catch (error) {
            console.log(error)
        }
    }

    eliminarOrganizador(id) {
        try {
            let eventos = this.DEvento.select([], [])
            let eventosOrganizador = eventos.filter(evento => evento.fk_organizador == id)
            if (eventosOrganizador.length > 0) {
                return "No se puede eliminar el organizador porque tiene eventos asociados"
            }
            this.DOrganizador.delete(id)
            return true
        } catch (error) {
            console.log(error)
        }
    }
}