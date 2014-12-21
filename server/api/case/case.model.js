'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CaseSchema = new Schema({
  shortDescription: String,
  hwFirstName: String,
  hwLastName: String,
  hwEmail: String,
  created_at    : { type: Date },
  updated_at    : { type: Date }
});

CaseSchema.pre('save', function(next){
  var now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

module.exports = mongoose.model('Case', CaseSchema);
