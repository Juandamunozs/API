const express = require('express');
const mysql = require('mysql');

const router = express.Router();


const BD = {
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'citas',
  port: 3306
};

const conexion = mysql.createConnection(BD);

router.get('/', (req, res) => {
  conexion.connect((error) => {
    if (error) {
      console.error('Error conectando a la base de datos:', error);
      res.status(500).send('Error conectando a la base de datos');
      return;
    }

    console.log('Conexión exitosa a la base de datos', BD.database);

    const query = `SELECT * FROM doctor`;

    conexion.query(query, (err, results) => {
      if (err) {
        console.error('Error ejecutando la consulta:', err);
        res.status(500).send('Error ejecutando la consulta');
        return; 
      }

      console.log('Tabla doctor:\n', results); 

      conexion.end((err) => {
        if (err) {
          console.error('Error al cerrar la conexión:', err);
        } else {
          console.log('Conexión cerrada exitosamente');
        }
      });

      res.json(results); // Devolver resultados como JSON
    });
  });
});

module.exports = router;