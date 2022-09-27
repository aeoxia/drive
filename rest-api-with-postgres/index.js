const express = require('express')  
const bodyParser = require('body-parser')  
const app = express()  
const port =  3000 
app.use(bodyParser.json()) 
app.use( bodyParser.urlencoded({ extended:  true,  })  )

const  Pool  = require('pg').Pool
  
const pool =  new  Pool({
    user:  'postgres',
    host:  'localhost',
	database:  'api',
    password: '',
    port:  5432,  
})

app.get('/',  (request, response)  =>  { 
    response.json(
	    { info:  'Node.js, Express, and Postgres API'  }
    )  
})

app.get("/students", async (req, res) => {
    try {
	    const students = await pool.query('SELECT * FROM public.student ORDER BY id ASC');
	    res.json(students.rows)
    } catch (error) {
	    console.log(error)
    }
})

app.listen(port,  ()  =>  { 
    console.log(`App running on port ${port}.`)  
})