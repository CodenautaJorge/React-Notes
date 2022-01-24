'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

    title: String,
    date: {type: Date, default: Date.now},
    content: String,
    author: String

});

module.exports = mongoose.model('Article', ArticleSchema);