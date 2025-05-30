const express = require('express');
const app = express();

app.use(express.json());

const libros = [
  { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
  { id: 2, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes' },
  { id: 3, titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón' }
];

app.get('/', (req, res) => {
  res.json(libros);
});

app.get('/libros', (req, res) => {
  res.json(libros);
});

app.get('/libros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const libro = libros.find(l => l.id === id);

  if (libro) {
    res.json(libro);
  } else {
    res.status(404).json({ mensaje: 'Libro no encontrado' });
  }
});

app.post('/libros', (req, res) => {
  const nuevoLibro = req.body;
  nuevoLibro.id = libros.length + 1;
  libros.push(nuevoLibro);
  res.status(201).json(nuevoLibro);
});

// NUEVA RUTA PARA ELIMINAR UN LIBRO
app.delete('/libros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const indice = libros.findIndex(l => l.id === id);

  if (indice !== -1) {
    const libroEliminado = libros.splice(indice, 1)[0];
    res.json({ mensaje: 'Libro eliminado', libro: libroEliminado });
  } else {
    res.status(404).json({ mensaje: 'Libro no encontrado' });
  }
});

app.patch('/libros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const libro = libros.find(l => l.id === id);

  if (!libro) {
    return res.status(404).json({ mensaje: 'Libro no encontrado' });
  }

  const { titulo, autor } = req.body;

  if (titulo !== undefined) libro.titulo = titulo;
  if (autor !== undefined) libro.autor = autor;

  res.json({ mensaje: 'Campos actualizados', libro });
});


app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:8080');
});
