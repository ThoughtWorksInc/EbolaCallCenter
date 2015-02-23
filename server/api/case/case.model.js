'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CaseSchema = new Schema({
  shortDescription: String,
  notes: String,
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  id: String,
  healthWorker: String,
  createdAt : { type: Date },
  updatedAt : { type: Date }
});

CaseSchema.pre('save', function(next){
  var now = new Date();
  this.updatedAt = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }
  next();
});

module.exports = mongoose.model('Case', CaseSchema);
