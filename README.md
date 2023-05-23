# books-app
ejercicio de simulacion de administración de base de datos de libros donde puedes modificar, agregar y eliminar entradas

Este es una aplicación de React que utiliza Material-UI para estilos. El código representa el componente BooksApp, que es el componente principal de la aplicación.Incluye diversas importaciones, hooks y funciones para proporcionar la funcionalidad de la aplicación.

# ver funcionando versión de producción
https://fplanellas-booksapp.netlify.app/

## notas del desarrollador para el revisador de código
#### Parámetros de email y contraseña harcodeados:
Entiendo que la práctica de harcodear directamente los valores de email y contraseña en el código puede presentar un riesgo de seguridad.
Los datos sensibles, como las credenciales de inicio de sesión, no deben incluirse directamente en el código fuente, 
ya que cualquier persona con acceso al código podría ver y potencialmente abusar de esta información.

al ser una prueba en modo desarrollo he decidido ponerlo así, pero se que no se debe
#### Uso de console.log para recoger errores en modo desarrollo:
comprendo perfectamente que esto deb limitarse al entorno de desarrollo y no debe dejarse en el código en producción. 
Los mensajes de registro pueden contener información sensible y representar un riesgo de seguridad. 
Además, pueden afectar el rendimiento de la aplicación.

## Características
Muestra una disposición de libros utilizando el componente BooksLayout.
Muestra la vista de un libro específico utilizando el componente BookView cuando hay un libro activo.
Permite al usuario agregar un nuevo libro mediante el botón add, editarlo y eliminarlo.
Proporciona funcionalidad de autenticación utilizando la autenticación de Firebase.
Utiliza Redux para la gestión del estado con acciones como login y startNewBook.
Muestra un indicador de carga mientras se verifica el estado de autenticación con el componente CheckingAuth.
Utiliza el hook personalizado useCheckAuth para manejar el estado de autenticación.
Requisitos previos
## Antes de ejecutar la aplicación, asegúrate de tener instaladas las siguientes dependencias:
React,
Material-UI,
Redux,
Firebase

## Instalación
Clona el repositorio:
git clone https://github.com/tu/repo.git
## Instala las dependencias:
cd nombre-proyecto

yarn install
## Inicia el servidor de desarrollo:
yarn dev

Abre tu navegador y ve a la url que indique la terminal para ver la aplicación en funcionamiento.

## Uso
El componente BooksApp sirve como punto de entrada de la aplicación. Renderiza la disposición principal y maneja las interacciones del usuario.

Cuando la aplicación se carga, intenta iniciar sesión con el correo electrónico y la contraseña proporcionados utilizando la autenticación de Firebase. Al autenticarse correctamente, se envía el ID y el correo electrónico del usuario al almacenamiento de Redux utilizando la acción login.

Luego, la aplicación verifica el estado de autenticación utilizando el hook useCheckAuth. Mientras se verifica el estado, se muestra un indicador de carga con el componente CheckingAuth.

Si el estado de autenticación ya no es "checking", se renderiza el contenido principal de la aplicación:

Si hay un libro activo (la variable active es true), se muestra el componente BookView.
De lo contrario, se podría mostrar el componente NothingSelectedView (actualmente comentado).
El usuario puede hacer clic en el botón "Agregar" (IconButton) para crear un nuevo libro. Esto activa la función onClickNewBook, que envía la acción startNewBook.
