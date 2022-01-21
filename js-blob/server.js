const express = require('express'),
cors = require('cors');
multer  = require('multer'),
upload = multer({ dest: '/tmp/' }),
app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.post('/', upload.any(), (req, res) => {
    res.send(req.files);
});
app.listen(3000, () => console.log('Servering Started !'));
