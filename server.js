const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const cors = require('cors');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist/electronApp')));
// app.use(express.static(path.join(__dirname, 'src')));
// const corsOptions = {
//     origin: ['http://localhost:4200', 'http://localhost:3000']
// }
// app.use(cors(corsOptions));
app.use(cors());

app.get('/', (req, res) => {
    // res.json(req+"");
    // console.log(__dirname+"dist/electronApp/index.html");
    res.sendFile(__dirname+"dist/electronApp/index.html");
});

app.get('/test', (req, res) => {
    res.json("Server is up...");
}); 

app.listen(PORT, function(){
    console.log('Server is running on Port',PORT);
});