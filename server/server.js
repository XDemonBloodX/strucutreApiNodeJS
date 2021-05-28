const express = require("express");
const bodyParser = require('body-parser')
const db = require("./db/index");
const routes = require('./db/routes')
const app = express();

app.use(express.json());

const PORT = 3000;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)


routes(app)

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
})