'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/cases', function() {
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/cases')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});


describe('POST /api/cases', function() {
  it('should create a case with timestamps', function(done) {
    request(app)
      .post('/api/cases')
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.have.property('createdAt');
        res.body.should.have.property('updatedAt');
        done();
      });
  });
});
