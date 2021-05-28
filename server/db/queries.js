const mysql = require('mysql');
const db = mysql.createConnection({
    password: '',
    user: 'root',
    database: 'mydb',
    host: 'localhost',
    port: '3306'
});


const show = (req, res) => {
    /*
    db.query('SELECT * FROM mytable', (err, result) => {
        if (err) {
            throw err
        }
        res.status(200).send(result)
    })*/
    res.status(200).send("{ name: lol }")
}

const showName = (req, res) => {
    let name = req.params.name;
    db.query('SELECT * FROM mytable WHERE name = ?', [name], (err, result) => {
        if (err) {
            throw err
        }
        res.status(200).send(result)
    })
}
const create = (req, res) => {

    const { name, description, url } = req.body
    db.query('INSERT INTO mytable (name, description, url) VALUES (?, ?, ?)', [name, description, url], (err, result) => {
        if (err) {
            throw err
        }
        res.status(200).send('Row added :' + req.body)
    })
}

const myUpdate = (req, res) => {
    const id = req.params.id
    const { name, description, url } = req.body
    db.query('UPDATE mytable SET name = ?, description = ?, url = ? WHERE id= ?', [name, description, url, id], (err, resutls) => {
        if (err) { throw err }
        console.log('User N°' + id + ' modified')
        res.status(200).send('Row N°' + id + ' modified')
    })
}

const del = (req, res) => {
    const id = req.params.id
    db.query('DELETE FROM mytable WHERE id  = ?', [id], (error, results) => {
        if (error) {
            throw error
        }
        console.log(`Row deleted with name: ` + id)
        res.status(204).send(`Row deleted with ID:` + id)
    })
}


module.exports = {
    show,
    showName,
    del,
    create,
    myUpdate
}