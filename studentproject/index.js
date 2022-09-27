// import modules/libraries
const express = require('express')
const parser = require('body-parser')
const Pool = require('pg').Pool

//initialize 
const app = express()
app.use(express.json())
const port = 3000
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cocomove',
    password: '',
    port: 5432
})

app.get('/skins', async (request, response) => {
    try {
        const skins = await pool.query("SELECT * FROM public.skins where id in (SELECT * from public.device_skin where device_id in (SELECT id from public.device))")
        response.json(skins.rows)
    } catch (error) {
        console.log(error)
    }
})

app.get('/devices', async (request, response) => {
    try {
        const devices = await pool.query("SELECT * FROM public.devices ORDER BY id ASC ")
        response.json(devices.rows)
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})

//student api
app.get('/students', async (request, response) => {
    try {
        const students = await pool.query("SELECT * FROM public.student ORDER BY id ASC ")
        response.json(students.rows)
    } catch (error) {
        console.log(error)
    }
})

//add a row
app.post('/student', async (request, response) => {
    try {
        const student = request.body
        const statement = "insert into public.student (id, name) values ($1, $2)"
        const values = [student.id, student.name]
        pool.query(statement, values)
        response.send(`${student.name} successfully added`)
    } catch (error) {
        console.log(error)
    }
})

// facebook.com/profile/:id/activities/

//delete a row using id
app.delete('/student/:id', async (request, response) => {
    try {
        const id = request.params.id 
        const statement = "delete from public.student where id = $1"
        const values = [id]
        pool.query(statement, values)
        response.send(`${id} successfully added`)
    } catch (error) {
        console.log(error)
    }
})

//get a row using name
app.get('/student/:name', async (request, response) => {
    try {
        const name = request.params.name 
        const statement = "SELECT * FROM public.student where name = $1 ORDER BY id ASC"
        const values = [name]
        const student = await pool.query(statement, values)
        response.json(student.rows)
    } catch (error) {
        console.log(error)
    }
})

/**
-add new rows
-delete  rows
-get specific row based on name
 */



//#endregion


app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})