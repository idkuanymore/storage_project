const express = require('express');
const fs = require('fs'); // Add file system module
const app = express();
const port = 3000;

app.use(express.static('.')); // Serve static files from the current directory
app.use(express.json());       // Middleware to parse JSON request bodies

app.get('/data', (req, res) => {
    res.sendFile(__dirname + '/data.json');
});

app.post('/data', (req, res) => {
    const newData = req.body;
    fs.writeFile(__dirname + '/data.json', JSON.stringify(newData, null, 2), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.status(500).send('Error writing to file');
            return;
        }
        console.log('File successfully written');
        res.status(200).send('Data updated successfully');
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});