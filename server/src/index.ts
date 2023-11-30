import { appendFileSync } from "fs";

const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/getData', (req, res) => {
    console.log('lol')
  res.send({bruh : 'Successful response.'});
});

app.get('/setData', function(req, res){
    // Access the data from the request body
    const data = req.body;

    // Perform any processing or data storage logic here
    console.log('Received data:', data);

    // Respond to the client
    res.send({ message: 'Data received successfully.' });
    // fs.writeFile('./data.json', {stuff : req.body}, 'utf8', err => {
    //     if (err) {
    //       console.log(`Error writing file: ${err}`)
    //     } else {
    //       console.log(`File is written successfully!`)
    //     }
    //   })
})

app.listen(8000, () => console.log('Example app is listening on port 8000.'));