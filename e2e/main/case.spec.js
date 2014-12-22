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
    newCasePage.submitButton.click();
    expect(newCasePage.hwLastNameInput.getAttribute('class')).toContain('ng-valid');

    newCasePage.hwFirstNameInput.clear();
    newCasePage.submitButton.click();
    expect(newCasePage.hwFirstNameInput.getAttribute('class')).toContain('ng-invalid');
  });

  it('should validate email address', function() {
    newCasePage.submitButton.click()
    expect(newCasePage.alertEl.getText()).not.toContain('Health Worker Email must be valid');
    
    newCasePage.hwEmailInput.sendKeys('invalidemail');    
    newCasePage.submitButton.click();
    expect(newCasePage.hwEmailInput.getAttribute('class')).toContain('ng-invalid');

    newCasePage.hwEmailInput.clear();    
    newCasePage.hwEmailInput.sendKeys('validemail@gmail.com');
    newCasePage.submitButton.click();
    expect(newCasePage.hwEmailInput.getAttribute('class')).toContain('ng-valid');
  });

  it('should validate phone number', function() {
    newCasePage.submitButton.click()
    expect(newCasePage.alertEl.getText()).toContain('Health Worker Phone Number is required');

    newCasePage.hwPhoneInput.sendKeys('rubbish');

    expect(newCasePage.hwPhoneInput.getAttribute('class')).toContain('ng-invalid');

    newCasePage.hwPhoneInput.clear();
    newCasePage.hwPhoneInput.sendKeys('123 - ()');
    expect(newCasePage.hwPhoneInput.getAttribute('class')).toContain('ng-valid');
  });

  it('should create new case', function() {
    newCasePage.shortDescriptionInput.sendKeys('Test');
    newCasePage.notesInput.sendKeys('Test Notes');
    newCasePage.hwFirstNameInput.sendKeys('Test First Name');
    newCasePage.hwLastNameInput.sendKeys('Test Last Name');
    newCasePage.hwPhoneInput.sendKeys('123456789');
    newCasePage.hwEmailInput.sendKeys('TestEmail@gmail.com');
    newCasePage.submitButton.click();

    expect(casesPage.casesLi.getText()).toEqual(['Case #1: Test - Test Notes - Test First Name - Test Last Name - 123456789 - TestEmail@gmail.com'])
  });


});
