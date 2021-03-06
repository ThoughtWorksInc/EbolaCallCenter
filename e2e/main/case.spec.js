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
    newCasePage.submit();
    expect(newCasePage.alertEl.getText()).toContain('Case Short Description is required');
  });

  it('should validate health worker name', function() {
    newCasePage.submit();
    expect(newCasePage.alertEl.getText()).toContain('Health Worker Name is required');

    newCasePage.setFirstName('Test First Name');
    expect(newCasePage.alertEl.getText()).toContain('Health Worker Name is required');

    newCasePage.setLastName('Test Last Name');
    expect(newCasePage.hwLastNameInput.getAttribute('class')).toContain('ng-valid');

    newCasePage.clearHealthWorker();
    expect(newCasePage.hwFirstNameInput.getAttribute('class')).toContain('ng-invalid');
  });

  it('should validate email address', function() {
    newCasePage.submit();
    expect(newCasePage.alertEl.getText()).not.toContain('Health Worker Email must be valid');
    
    newCasePage.hwEmailInput.sendKeys('invalidemail');    
    newCasePage.submit();
    expect(newCasePage.hwEmailInput.getAttribute('class')).toContain('ng-invalid');

    newCasePage.hwEmailInput.clear();    
    newCasePage.hwEmailInput.sendKeys('validemail@gmail.com');
    newCasePage.submit();
    expect(newCasePage.hwEmailInput.getAttribute('class')).toContain('ng-valid');
  });

  it('should validate phone number', function() {
    newCasePage.submit();
    expect(newCasePage.alertEl.getText()).toContain('Health Worker Phone Number is required');

    newCasePage.hwPhoneInput.sendKeys('rubbish');
    expect(newCasePage.hwPhoneInput.getAttribute('class')).toContain('ng-invalid');

    newCasePage.hwPhoneInput.clear();
    newCasePage.hwPhoneInput.sendKeys('123 - ()');
    expect(newCasePage.hwPhoneInput.getAttribute('class')).toContain('ng-valid');
  });

  it('should create new case', function() {
    newCasePage.setShortDescription('Test');
    newCasePage.notesInput.sendKeys('Test Notes');
    newCasePage.setFirstName('Test First Name');
    newCasePage.setLastName('Test Last Name');
    newCasePage.hwPhoneInput.sendKeys('123456789');
    newCasePage.hwEmailInput.sendKeys('TestEmail@gmail.com');
    newCasePage.submit();

    expect(casesPage.casesLi.getText()).toEqual(['Case #1: Test - Test Notes - Test First Name - Test Last Name - 123456789 - TestEmail@gmail.com'])
  });


});
