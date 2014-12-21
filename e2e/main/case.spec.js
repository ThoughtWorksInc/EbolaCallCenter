'use strict';

describe('Case View', function() {
  var newCasePage, casesPage;

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/ebolacallcenter-test');

  beforeEach(function() {
    mongoose.connection.db.dropDatabase(function(){});

    browser.get('/');
    newCasePage = require('./new-case.po');
    casesPage = require('./cases.po');
  });

  it('should validate short description', function() {
    newCasePage.submitButton.click()
    expect(newCasePage.alertEl.getText()).toContain('Case Short Description is required');
  });

  it('should validate health worker name', function() {
    newCasePage.submitButton.click()
    expect(newCasePage.alertEl.getText()).toContain('Health Worker Name is required');

    newCasePage.hwFirstNameInput.sendKeys('Test First Name');

    expect(newCasePage.alertEl.getText()).toContain('Health Worker Name is required');

    newCasePage.hwLastNameInput.sendKeys('Test Last Name');

    expect(newCasePage.alertEl.getText()).not.toContain('Health Worker Name is required');

    newCasePage.hwFirstNameInput.clear();

    expect(newCasePage.alertEl.getText()).toContain('Health Worker Name is required');
  });

  it('should validate email address', function() {
    //todo
  });

  it('should create new case', function() {
    newCasePage.shortDescriptionInput.sendKeys('Test');
    newCasePage.hwFirstNameInput.sendKeys('Test First Name');
    newCasePage.hwLastNameInput.sendKeys('Test Last Name');
    newCasePage.hwEmailInput.sendKeys('TestEmail');
    newCasePage.submitButton.click();

    expect(casesPage.casesLi.getText()).toEqual(['Case #1: Test - Test First Name - Test Last Name - TestEmail'])
  });
});
