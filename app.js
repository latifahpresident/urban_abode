const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const compression = require('compression');

const productRoutes = require('./ua_backend/routes/products');

const app = express();
app.use(express.json());
app.use(compression())
app.use(helmet());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    next();
});
app.get('/sanity', (req, res) => {res.send('********sanity check********')});
app.use('/', productRoutes)
module.exports = app
