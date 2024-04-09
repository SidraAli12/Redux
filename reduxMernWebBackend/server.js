const express = require('express');
const app = express();

const cors = require("cors");

app.use(cors())

require('dotenv').config();
const router = require('./router/router')
const port = process.env.PORT
require('./db/prob');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use([router])

app.listen(port, () => {
    console.log(`Our Server is running at port ${port}`)
   
})