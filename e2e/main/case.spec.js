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

  it('should validate phone number', function() {
    newCasePage.submitButton.click()
    expect(newCasePage.alertEl.getText()).toContain('Health Worker Phone Number is required');

    newCasePage.hwPhoneInput.sendKeys('rubbish');

    expect(newCasePage.alertEl.getText()).toContain('Health Worker Phone Number must be valid');

    newCasePage.hwPhoneInput.clear();
    newCasePage.hwPhoneInput.sendKeys('123 - ()');

    expect(newCasePage.alertEl.getText()).not.toContain('Health Worker Phone Number must be valid');
    //todo format of number
  });

  it('should create new case', function() {
    newCasePage.shortDescriptionInput.sendKeys('Test');
    newCasePage.notesInput.sendKeys('Test Notes');
    newCasePage.hwFirstNameInput.sendKeys('Test First Name');
    newCasePage.hwLastNameInput.sendKeys('Test Last Name');
    newCasePage.hwPhoneInput.sendKeys('123456789');
    newCasePage.hwEmailInput.sendKeys('TestEmail');
    newCasePage.submitButton.click();

    expect(casesPage.casesLi.getText()).toEqual(['Case #1: Test - Test Notes - Test First Name - Test Last Name - 123456789 - TestEmail'])
  });


});
