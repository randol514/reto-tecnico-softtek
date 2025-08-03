# RIMAC Seguros y Reaseguros

Esto es una prueba tecnica, donde se realiza una aplicacion de cotización de seguros de salud.

# Tecnologias utilizadas

- **React** - Lenguaje Javascript
- **Redux toolkit** – Para manejo de estado global
- **Hooks** - Hooks integrados para ciclo de vida del componente, para manejo de estado; Hooks personalizados Para lógica reutilizable

- **SASS** - Preprocesador CSS
- **Module CSS3** - Para encapsulamiento de estilos a nivel de componente y evitar conflictos de clases

- **Fetch API** - Para consumo de APIs
- **React router dom** - Para rutas de la App
- **Vite** - herramienta de construcción
- **Jest** - Un ejemplo de unit test en planSlice para probar si se esta seleccionando el plan esperado

## Estructura de carpetas

```plaintext
├── assets/        # Imágenes, logos y fuentes
├── components/    # Componentes reutilizables de UI y formularios
├── features/      # Para usar redux, la creacion de los slices
├── hooks/         # Hooks personalizados (formularios, API)
├── lib/           # Validaciones, mensajes de error, reglas
├── pages/         # Vistas principales de la aplicación
├── redux/         # Para manejo de estado global
├── routes/        # Definición de rutas y navegación
├── services/      # Consumo de APIs de planes y usuarios
├── styles/        # Archivos SASS para diseño y estilos
├── utils/         # Funciones auxiliares (formato de fecha, etc.)
```

## APIs consumidas

- **Usuarios:** Información de la API de Usuarios
- **Planes:** Planes de seguros disponibles para cotizar

## Decisiones técnicas

- Se implementó Redux Toolkit mediante slices (formSlice y planSlice) para manejar el estado del formulario y el plan seleccionado de forma centralizada, esto para demostrar que se puede aplicar a algunos requerimientos especificos.
- Se optó por **hooks personalizados** para separar la lógica de negocio del componente y mantener el código limpio y reutilizable.
- La estructura del proyecto está pensada para **escalabilidad y mantenibilidad**, separando claramente responsabilidades.

## Validación de formularios

Las reglas, errores y validaciones están definidas en `lib/`, y se integran con los hooks personalizados para asegurar una buena experiencia de usuario.

## Funcionalidades

- Selección de cotización para uno mismo o para otra persona (con descuento automático).
- Cálculo del plan según datos ingresados.
- Resumen dinámico y personalizado del seguro.
- Interfaz responsive adaptada a dispositivos móviles.

## Instalación y ejecución

```bash
npm install
npm run dev
npm run test
npm run build
```
