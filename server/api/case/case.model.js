'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CaseSchema = new Schema({
  shortDescription: String
}); // Todo

module.exports = mongoose.model('Case', CaseSchema);
