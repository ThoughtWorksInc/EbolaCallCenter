/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /casess              ->  index
 */

'use strict';

var _ = require('lodash');
var Case = require('./case.model');

// Get list of cases
exports.index = function(req, res) {
  Case.find(function (err, cases) {
    if(err) { return handleError(res, err); }
    return res.json(200, cases);
  });
};

// Creates a new case in the DB.
exports.create = function(req, res) {
  Case.create(req.body, function(err, kase) {
    if(err) { return handleError(res, err); }
    return res.json(201, kase);
  });
};


function handleError(res, err) {
  return res.send(500, err);
}
