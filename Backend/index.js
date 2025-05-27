const express = require('express'); 
const cors = require('cors');

const app = express(); 
const PORT = 8080;

app.use(cors());

app.get('/', (req, res) => {
  res.send('¡Hola mundo!');
});

app.get('/ping', (req, res) => {
  res.json({ respuesta: 'pong' }); 
});
 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
