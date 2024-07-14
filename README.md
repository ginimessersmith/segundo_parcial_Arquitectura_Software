# Segundo Parcial de Arquitectura de Software

Este repositorio contiene la implementación del segundo parcial de la materia Arquitectura de Software. El objetivo principal de este proyecto es demostrar la implementación del patrón de arquitectura en 3 capas junto con dos patrones de diseño: Command y Strategy.

## Descripción del Proyecto

El proyecto se centra en una aplicación que implementa:

1. **Patrón de Arquitectura en 3 Capas**:
   - **Capa de Presentación**: Interfaz de usuario.
   - **Capa de Negocios**: Lógica de negocio.
   - **Capa de Datos**: Gestión de la persistencia de datos.

2. **Patrones de Diseño**:
   - **Command**: Utilizado para encapsular solicitudes como objetos, permitiendo así parametrizar métodos con diferentes solicitudes, encolar o registrar solicitudes y soportar operaciones que se pueden deshacer.
   - **Strategy**: Definiendo una familia de algoritmos, encapsulándolos y haciéndolos intercambiables. Permite que el algoritmo varíe independientemente de los clientes que lo utilicen.

## Corrección de Errores

### Problema con el Patrón Strategy

Durante la implementación, se detectó un error en el uso del patrón Strategy. El problema radica en la incapacidad de elegir estrategias en tiempo de ejecución para un caso de uso específico.

## Uso del Proyecto

Para clonar y ejecutar este proyecto, sigue los siguientes pasos:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/segundo-parcial-arquitectura-software.git
