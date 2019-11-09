/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var NewCase = function() {
  this.formEl = element(by.css('form'));
  this.shortDescriptionInput = this.formEl.element(by.model('hwCase.shortDescription'));
  this.notesInput = this.formEl.element(by.model('hwCase.notes'));
  this.hwFirstNameInput = this.formEl.element(by.model('hwCase.hwFirstName'));
  this.hwLastNameInput = this.formEl.element(by.model('hwCase.hwLastName'));
  this.hwPhoneInput = this.formEl.element(by.model('hwCase.hwPhone'));
  this.hwEmailInput = this.formEl.element(by.model('hwCase.hwEmail'));

  this.submitButton = this.formEl.element(by.css('button'));
  this.alertEl = this.formEl.element(by.css('.alert'));

  this.setShortDescription = function(value) {
    this.shortDescriptionInput.sendKeys(value);
    this.formEl.click();
  };

  this.setNotes = function(value) {
    this.notesInput.sendKeys(value);
    this.formEl.click();
  };

  this.setFirstName = function(value) {
    this.hwFirstNameInput.sendKeys(value);
    this.formEl.click();
  };

  this.setLastName = function(value) {
    this.hwLastNameInput.sendKeys(value);
    this.formEl.click();
  };

  this.clearHealthWorker = function() {
    this.hwFirstNameInput.clear();
    this.hwLastNameInput.clear();
    this.hwPhoneInput.clear();
    this.hwEmailInput.clear();
  }

  this.submit = function() {
    this.submitButton.click();
  };
};

module.exports = new NewCase();

