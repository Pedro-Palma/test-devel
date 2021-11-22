# Test-devel
Challenge devel security (backend)
## 
El API realizada cumple con las funciones requeridas para el manejo de encuestas (crear,modificar,eliminar), estas mismas pueden ser llenadas por los usuarios de manera anónima ya que no requiere autenticación como se solicitó, las auntenticaciones son realizadas mediante la librería JWT. 

Para poder ejecutar el proyecto debe clonar el repositorio.

## Configuración

Base de datos `sql server`

Deberá ejecutar `CREATE DATABASE TestDB`

Luego en el archivo `knexfile.ts` debera configurar los parámetros correspondientes a su base de datos (User , Password , Server).

Use `nvm` para instalar de manera correcta la versión de node:
```shell script
nvm install
```

Instalar packages.
```shell script
npm install
```
Ejecutar las migraciones.
```shell script
npm run dbm
```

Ejecutar la aplicación.
```shell script
npm run dev
```

# Tecnologías

El API fue realizado con:
- [NodeJs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Objection.js](https://vincit.github.io/objection.js/)
- [Knex.js](http://knexjs.org/)

Se realizaron validaciones de los parámetros con la librería:

- [Joi](https://joi.dev/)

# Colección de postman
- [Coleccion test-backend](https://www.postman.com/material-engineer-77285513/workspace/test-devel-security/collection/14620851-4c1affe6-10c1-4d93-a09a-103400c2ec92?ctx=documentation)
