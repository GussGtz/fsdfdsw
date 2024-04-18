import express from 'express';
import mysql from 'mysql';

const app = express();

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'huevito'
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexión a la base de datos MySQL establecida');
});

// Ruta para obtener datos de la base de datos
app.get('/datos', (req, res) => {
  const sql = 'SELECT * FROM registroambiente';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Iniciar el servidor
app.listen(8082, () => {
    console.log("Servidor iniciado...");
  });