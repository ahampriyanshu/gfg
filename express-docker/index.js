const express = require('express'),
app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', 
    (req, res) => res.send('<h1>Dockerizing Node Application</h1>'))

app.listen(5000, 
    () => console.log(`⚡️[bootup]: Server is running at port: 5000`))