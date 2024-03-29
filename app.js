//IMPORTACIONES PAQUETES GENÉRICOS
const express = require('express')
const app = express()
const port = 3000

//MIS IMPORTACIONES
//importar esto para enviar libros necesarios
const books = require('./data/books.json')

//Middlewarest
app.use(express.json());//Para parsear el body de las peticiones


/*****RUTAS*****/

// GET 
//EJERCICIO 1
//http://localhost:3000/all
app.get('/all', (req, res) => {
  //const all=req.params.books;
   res.status(200).json(books);//devuelve lo solicitado
 });
 
 
 //EJERCICIO 2 Crea una ruta /first para obtener el primer libro
 //http://localhost:3000/first
 app.get('/first', (req, res) => {
   res.status(200).json(books[0]);//devuelve lo solicitado
 });

 //EJERCICIO 3 http://localhost:3000/last
 app.get('/last', (req, res) => {
  res.status(200).json(books[books.length-1]);//devuelve lo solicitado
});

 //EJERCICIO 4 http://localhost:3000/middle
 app.get('/middle', (req, res) => {
  let middle= books.length/2;
  res.status(200).json(books[middle]);//devuelve lo solicitado
});


// EJERCICIO 5 Obtener el titulo del libro de Dante Alighieri
// http://localhost:3000/author/dante-alighieri
app.get("/author/dante-alighieri", (req, res) => {
  const book = books.find((item) => item.author == "Dante Alighieri");
  res.status(200).json(book.title);
});

//EJERCICIO 6 
//Dame solo el país del libro de Charles Dickens
app.get('/country/charles-dickens', (req, res) => {
  for (let i = 0; i < books.length; i++) {
    if (books[i].author == "Charles Dickens") {
      res.status(200).json(books[i].country);
    }
  }
})

//EJERCICIO 7
//Obtener las páginas y el libro de Cervantes
// http://localhost:3000/year&pages/cervantes
app.get("/year&pages/cervantes", (req, res) => {
  const book = books.find((item) => item.author == "Miguel de Cervantes");
  const result = {
    pages: book.pages,
    year: book.year,
  };
  res.status(200).json(result);
});


//EJERCICIO 8
//Devolver el número de libros de España
//http://localhost:3000/country/count/spain
app.get('/country/count/spain', (req, res) => {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
      if (books[i].country == "Spain") {
          count += 1
      }
  }
  res.status(200).json(count)
})

//EJERCICIO 9 
//Devuelve si es true o false si al menos hay un libro en alemán
// http://localhost:3000/country/at-least/germany
app.get("/country/at-least/germany", (req, res) => {
  const comparison = books.some((element) => element.country === "Germany");
  res.status(200).json(comparison);
});


//EJERCICIO 10
// http://localhost:3000//pages/all-greater/200
app.get("/pages/all-greater/200", (req, res) => {
  const comparison = books.every((element) => element.pages> 100);
  res.status(200).json(comparison);
});



//http://localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
  })