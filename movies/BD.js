
const mysql = require('mysql');

const BD = {
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'citas',
  port: 3306
};

const conexion = mysql.createConnection(BD);

conexion.connect((error) => {
  if (error) {
    console.error('Error connecting to database:', error);
    return;
  }

  console.log('Conexion exitosa a la base de datos', BD.database);


  const query = `SELECT * FROM doctor`;

  conexion.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return; 
    }

    console.log('Tabla doctor:\n', results); 

    conexion.end((err) => {
      if (err) {
        console.error('Error ending connection:', err);
      } else {
        console.log('Conexion cerrada exitosamente');
      }
    });
  });
});