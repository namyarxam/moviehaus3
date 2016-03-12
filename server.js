// 'use strict'
const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const db = require('./db/pg')
const path = require('path')
const pg = require('pg')
const request = require('request')
const app = express();

require('dotenv').config();


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(morgan('short'));
app.use(express.static('./public'));













var port = process.env.PORT || 3000;
var server = app.listen(port)
