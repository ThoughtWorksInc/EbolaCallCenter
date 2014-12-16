'use strict';

describe('Case View', function() {
  var newCasePage, casesPage;

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/ebolacallcenter-test');

  beforeEach(function() {

    var Case = require('../../server/api/case/case.model');
    Case.remove({});

    browser.get('/');
    newCasePage = require('./new-case.po');
    casesPage = require('./cases.po');
  });

  it('should validate short description', function() {
    newCasePage.submitButton.click()
    expect(newCasePage.alertEl.getText()).toBe('Case Short Description is required');
  });

  it('should create new case', function() {
    newCasePage.nameInput.sendKeys('Test');
    newCasePage.submitButton.click();
    expect(casesPage.casesLi.getText()).toEqual(['Case #1: Test'])

  });
});
