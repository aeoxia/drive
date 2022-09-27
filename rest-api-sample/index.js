const express = require('express') 
const bodyParser = require('body-parser'); 

const app = express(); 
const port = 3000; 

app.use(express.static('public'))

// Where we will keep books  
let books = [
    {
        "id": "d00f5c3d-5872-455d-83a6-6b26e01126b2",
        "name": "coco book season 1",
        "image_url": "http://localhost:3000/images/coco1.jpg"
    },
    {
        "id": "d00f5c3d-5872-455d-83a6-6b26e01126b3",
        "name": "coco book season 2",
        "image_url": "http://localhost:3000/images/coco2.jpg"
    },
    {
        "id": "d00f5c3d-5872-455d-83a6-6b26e01126b4",
        "name": "coco book season 3",
        "image_url": "http://localhost:3000/images/coco3.jpg"
    }
]; 

// Configuring body parser middleware 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.get('/', (req, res) => { 
    res.send('Hello everyone')
    });


app.post('/book', (req, res) => { 
    const book = req.body; 
        // Output the book to the console for debugging  
        console.log(book); 
        books.push(book); 
        res.send('Book is added to the database'); 
    });

app.get('/books', (req, res) => { res.json(books); });

app.get('/book/:id', (req, res) => { 

    // Reading idfrom the URL  
    const id = req.params.id; 
    // Get item from the books array 
    filteredBooks = books.filter(i => { 
    if (i.id !== id) { 
	    return  false; 
    } 
	    return  true; 
    }); 
    res.json(filteredBooks) 
});

app.delete('/book/:id', (req, res) => { 
    // Reading id from the URL  
    const id = req.params.id; 
    // Remove item from the books array 
    books = books.filter(i => { 
    if (i.id !== id) { 
	    return  true; 
    } 
	    return  false; 
    }); 
    res.send('Book is deleted'); 
});

app.listen(port, () =>  
     console.log(`Hello world app listening on port ${port}!`)
 );