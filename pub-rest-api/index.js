const express = require('express');
const pubService = require('pub-services').pubService;
const app = express();
app.get('/pubs', function (req, res) {
res.status(200).json();
})
app.listen(3000);