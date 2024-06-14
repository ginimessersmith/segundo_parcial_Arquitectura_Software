import DEvento from "./DEvento.js";
import DInvitacion from "../Invitacion/DInvitacion.js";
import Validator from "../Strategy/context/contextValidators.js";
import EventoValidationStrategy from "../Strategy/strategies/eventoValidationStrategy.js";


export default class NEvento {
    DEvento = new DEvento()
    DInvitacion = new DInvitacion()
    validator = new Validator()

    constructor() {
    }

    agregarEvento(
        titulo,
        descripcion,
        direccion,
        fecha,
        idOrganizador,
        idCategoria
    ) {
        try {

            const data = {
                titulo,
                descripcion,
                direccion,
                fecha,
                idOrganizador,
                idCategoria
            }
            this.validator.setStrategy(new EventoValidationStrategy())
            const validation = this.validator.validate(data)

            if(validation){
                return validation
            }else{
                this.DEvento.insert(
                    titulo,
                    descripcion,
                    direccion,
                    fecha,
                    idOrganizador,
                    idCategoria
                );
    
                return true;
            }
            
        } catch (error) {
            console.error(error);
        }
    }

    listarEvento(
        listaCategorias,
        listaOrganizadores
    ) {
        try {
            return this.DEvento.select(
                listaCategorias,
                listaOrganizadores
            );
        } catch (error) {
            console.error(error);
        }
    }

    actualizarEvento(
        id,
        titulo,
        descripcion,
        direccion,
        fecha,
        idOrganizador,
        idCategoria) {
        try {
            if (titulo.trim() === "") {
                return "El titulo es requerido"
            } else if (descripcion.trim() === "") {
                return "La descripcion es requerida"
            } else if (direccion.trim() === "") {
                return "La direccion es requerida"
            } else if (fecha.trim() === "") {
                return "La fecha es requerida"
            } else if (isNaN(idOrganizador) || idOrganizador.trim() === "" || idOrganizador === null) {
                return "Debe elegir un organizador"
            } else if (isNaN(idCategoria) || idCategoria.trim() === "" || idCategoria === null) {
                return "Debe elegir una categoria"
            }

            this.DEvento.update(
                id,
                titulo,
                descripcion,
                direccion,
                fecha,
                idOrganizador,
                idCategoria
            );

            return true;
        } catch (error) {
            console.error(error);
        }
    }

    eliminarEvento(id) {
        try {
            let invitaciones = this.DInvitacion.select([], []);
            let invitacionesEvento = invitaciones.filter(invitacion => invitacion.fk_evento == id);
            if (invitacionesEvento.length > 0) {
                return "No se puede eliminar el evento, tiene invitaciones asociadas";
            }
            this.DEvento.delete(id);
            return true;
        } catch (error) {
            console.error(error);
        }
    }
}