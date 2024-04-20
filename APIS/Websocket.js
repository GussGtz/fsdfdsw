import express from "express";
import mysql from "mysql";
import cors from 'cors';
import { createServer } from "http";
import { WebSocketServer } from "ws";

const app = express();
const httpServer = createServer(app);
const wss = new WebSocketServer({ server: httpServer });

app.use(
  express.json(),
  cors()
);

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'incubadora'
});

conexion.connect(function (error) {
  if (error) {
    console.error("Error al conectar a la base de datos: ", error);
    process.exit(1);
  } else {
    console.log("Conexión realizada exitosamente a la base de datos");
  }
});

wss.on('connection', (ws) => {
  console.log('Cliente WebSocket conectado');

  ws.on('message', (data) => {
    // Convertir el buffer a una cadena de texto
    const dataString = data.toString();
    console.log('Datos recibidos:', dataString);
    // Aquí puedes realizar cualquier procesamiento adicional que necesites
  });
});



app.post('/guardardato', (req, res) => {
  const { temperatura, humedad, movimiento } = req.body;
  const sql = "INSERT INTO RegistroAmbiente (temperatura, humedad, movimiento) VALUES (?, ?, ?)";
  conexion.query(sql, [temperatura, humedad, movimiento], (error, resultado) => {
    if (error) return res.status(500).json({ error: "Error al guardar los datos del sensor DHT" });
    return res.status(201).json({ message: "Datos del sensor DHT guardados exitosamente", id: resultado.insertId });
  });
});

app.get('/datos', (req, res) => {
  const sql = "SELECT temperatura, humedad FROM RegistroAmbiente";
  conexion.query(sql, (error, resultados) => {
    if (error) return res.status(500).json({ error: "Error al obtener los datos del sensor DHT" });
    return res.status(200).json(resultados);
  });
});


httpServer.listen(3306, () => {
  console.log("Servidor en el puerto 8082");
});
