import * as path from 'path';



const development = {
  client: "mssql",

  useNullAsDefault: true,
  connection:{
    user: "sa", //configure the user of your database
    password: "Root1234",//configure the password of your database
    server: "localhost",// configure the server of your database
    database: "TestDB" // configure the name of your database
  },
    
  
  migrations: {
    tableName: 'knex_migrations',
    directory: path.resolve('./knex/migrations'),
    extension: '.ts',
    loadExtensions: ['.ts'],
  },
}



export default {
  development
}



/*user: "sa",
    password: "Real.minecraft1",
    server: "localhost",
    port: "1433",
    database: "TestDB",*/