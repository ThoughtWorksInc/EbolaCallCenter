'use strict';

describe('Case View', function() {
  var newCasePage, casesPage;

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/ebolacallcenter-test');

  beforeEach(function() {
    mongoose.connection.db.dropDatabase(function(){});

    browser.get('/');
    newCasePage = require('./new-case.po');
  });  


  it('should validate short description - 1', function() {
    var formEl = element(by.css('form'));
    var submitButton = formEl.element(by.css('button'));
    submitButton.click();

    expect(newCasePage.alertEl.getText()).toContain('Case Short Description is required');
  });

  it('should validate short description - 2', function() {
    var formEl = element(by.css('form'));
    var submitButton = formEl.element(by.css('button'));
    submitButton.click();

    expect(newCasePage.alertEl.getText()).toContain('Case Short Description is required');

    var shortDescriptionInput = formEl.element(by.model('hwCase.shortDescription'));
    shortDescriptionInput.sendKeys("something");
    var formEl = element(by.css('form'));
    formEl.click();

    expect(newCasePage.alertEl.getText()).toNotContain('Case Short Description is required');
  });

  it('should validate short description - 3', function() {
    newCasePage.submit();
    expect(newCasePage.errorMessages()).toContain('Case Short Description is required');

    newCasePage.setShortDescription('something');
    expect(newCasePage.errorMessages()).toNotContain('Case Short Description is required');
  });

});
