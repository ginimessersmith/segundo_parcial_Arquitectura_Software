import DInvitado from './DInvitado.js';
import DInvitacion from '../Invitacion/DInvitacion.js';

export default class NInvitado {
    DInvitado = new DInvitado();
    DInvitacion = new DInvitacion();

    constructor() {
    }


    agregarInvitado(
        nombre,
        apellido,
        edad,
        telefono,
    ) {
        
        try {

            if (nombre.trim() === "") {
                return "El nombre no puede estar vacio";
            }else if (apellido.trim() === "") {
                return "El apellido no puede estar vacio";
            }else if (isNaN(edad) || isNaN(telefono) || edad.trim() === "" || telefono.trim() === "") {
                return "La edad y el telefono deben ser numeros y no pueden estar vacios";
            }else if (edad < 0) {
                return "La edad no puede ser negativa";
            }

            this.DInvitado.insert(
                nombre,
                apellido,
                edad,
                telefono
            );
            return true;
        } catch (error) {
            console.error(error);
        }
    }

    listarInvitado() {
        try {
            return this.DInvitado.select();
        } catch (error) {
            console.error(error);
        }
    }

    actualizarInvitado(
        id,
        nombre,
        apellido,
        edad,
        telefono
    ) {
        try {

            if (nombre.trim() === "") {
                return "El nombre no puede estar vacio";
            }else if (apellido.trim() === "") {
                return "El apellido no puede estar vacio";
            }else if (isNaN(edad) || isNaN(telefono) || edad.trim() === "" || telefono.trim() === "") {
                return "La edad y el telefono deben ser numeros";
            }else if (edad <= 0) {
                return "La edad no puede ser negativa o cero";
            }

            this.DInvitado.update(
                id,
                nombre,
                apellido,
                edad,
                telefono
            );
            return true;
        } catch (error) {
            console.error(error);
        }
    }

    eliminarInvitado(id) {
        try {
            let invitaciones = this.DInvitacion.select([], []);
            let invitacionPorInvitado = invitaciones.filter(invitacion => invitacion.fk_invitado === id);
            if (invitacionPorInvitado.length > 0) {
                return "No se puede eliminar un invitado que tiene invitaciones asociadas";
            }
            this.DInvitado.delete(id);
            return true;
        } catch (error) {
            console.error(error);
        }
    }
}