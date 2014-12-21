/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var NewCase = function() {
  this.formEl = element(by.css('form'));
  this.shortDescriptionInput = this.formEl.element(by.model('hwCase.shortDescription'));
  this.hwFirstNameInput = this.formEl.element(by.model('hwCase.hwFirstName'));
  this.hwLastNameInput = this.formEl.element(by.model('hwCase.hwLastName'));
  this.hwEmailInput = this.formEl.element(by.model('hwCase.hwEmail'));

  this.submitButton = this.formEl.element(by.css('button'));
  this.alertEl = this.formEl.element(by.css('.alert'));
};

module.exports = new NewCase();

