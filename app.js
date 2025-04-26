
const express = require('express');
const mysql = require('mysql2/promise');
const { Client } = require('pg');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const MYSQL_HOST = process.env.mysqlcuc1.mysql.database.azure.com;
const MYSQL_USER = process.env.lmanotas12;
const MYSQL_PASSWORD = process.env.DIosesamor12;
const MYSQL_DATABASE = process.env.mysqlcuc1;

const POSTGRES_HOST = process.env.postgresssqlcuc1.postgres.database.azure.com;
const POSTGRES_USER = process.env.lmanotas12;
const POSTGRES_PASSWORD = process.env.DIosesamor12;
const POSTGRES_DATABASE = process.env.postgresssqlcuc1;

// Servir archivos estáticos
app.use(express.static('public'));

app.get('/conexion', async (req, res) => {
  let results = [];

  // Conexión a MySQL
  try {
    const mysqlConnection = await mysql.createConnection({
      host: mysqlcuc1.mysql.database.azure.com,
      user: lmanotas12,
      password: DIosesamor12,
      database: mysqlcuc1,
      port: 3306
    });
    await mysqlConnection.connect();
    results.push('✅ Conexión exitosa a MySQL');
    await mysqlConnection.end();
  } catch (err) {
    results.push(`❌ Error de conexión MySQL: ${err.message}`);
  }

  // Conexión a PostgreSQL
  try {
    const pgClient = new Client({
      host: postgresssqlcuc1.postgres.database.azure.com,
      user: lmanotas12,
      password: DIosesamor12,
      database: postgresssqlcuc1,
      port: 5432,
      ssl: { rejectUnauthorized: false }
    });
    await pgClient.connect();
    results.push('✅ Conexión exitosa a PostgreSQL');
    await pgClient.end();
  } catch (err) {
    results.push(`❌ Error de conexión PostgreSQL: ${err.message}`);
  }

  res.send(`<h2>Resultado de conexiones:</h2><ul>${results.map(r => `<li>${r}</li>`).join('')}</ul>`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
