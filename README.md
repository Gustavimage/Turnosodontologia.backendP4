README

Este es un proyecto API backend desarrollada en Node.js y Express para la gestión de servicios y reservas de turnos odontológicos, estructurada en (Rutas, Controladores y Managers) con persistencia en archivos JSON.

-------------------------------------------------------------------------------------------------------------

Características del Proyecto:

Separación de responsabilidades en Rutas, Controladores y Managers.
Almacenamiento de datos mediante archivos JSON (promises).
Verificación de existencia de servicios antes de ser asociados a una reserva.
Manejo de Errores con espuestas estructuradas (status, payload, message).

-------------------------------------------------------------------------------------------------------------

Estructura del Proyecto:

src/
  config/
     env.config.js
  controllers/
     services.controller.js
     bookings.controller.js
  managers/
     ServiceManager.js
     BookingManager.js
  routes/
     services.router.js
     bookings.router.js
  data/
     services.json
     bookings.json
  app.js
  server.js
package.json

-------------------------------------------------------------------------------------------------------------

Instalación y Configuración:

instalar dependencias mediante npm install en Bash
Configurar las variables de entorno mediante puerto 8080
ejecuttar el servidor mediante npm start

-------------------------------------------------------------------------------------------------------------

Endpoints de la API:

Servicios (services):

GET /services: Obtenemos el listado completo de servicios odontológicos. 
GET /services/:sid: Obtenemos el detalle de un servicio específico según su ID.
POST /services: Creamos un nuevo servicio de odontología.
PUT /services/:sid: Actualizamos un servicio existente.
DELETE /services/:sid: Eliminamos un servicio del listado de servicios.

Reservas (bookings):

POST /bookings: Creamos una nueva reserva de turno.
GET /bookings/:bid: Obtenemos el detalle de una reserva por su ID.
POST /bookings/:bid/services: Agregamos un servicio existente a una reserva.

------------------------------------------------------------------------------------------------------------

Herramientas de Prueba:

Se puede probar los endpoints utilizando herramientas como:

Postman o el http://localhost:/

-------------------------------------------------------------------------------------------------------------