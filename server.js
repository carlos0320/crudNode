require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000
const host = process.env.HOST || '127.0.0.1'

app.listen(port,()=>{
    console.log(`listening at  ${host}:${port}`)
})
