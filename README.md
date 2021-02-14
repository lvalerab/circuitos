# circuitos
Gestión de circuitos para adaptarse a la ley 39/15 y 40/15. Usando una capa externa de apis, que controle el estado de cada uno de los elementos.

#Fichero .env
Se deben declarar el fichero .env con las siguiente entradas

NODE_ENV=<development|stage|production> 
PORT=<Puerto que sirve la api>

LLAVE=<Cadena con la que se codifica el token>

SERVER_NTP=<servidores NTP para insertar la marca de tiempo en las llamadas>

REST_SERV_CERT_CRT=<fichero .crt para servir en ssl>
REST_SERV_CERT_KEY=<fichero .key para servir en ssl>

DB_DIALECT=<mysql|postgree|mariadb|mssql> 
DB_HOST=<ubicación del host de base de datos>
DB_USER=<usuario de base de datos>
DB_PASS=<password de base de datos>
DB_DATABASE=<nombre del repositorio de la base de datos>
