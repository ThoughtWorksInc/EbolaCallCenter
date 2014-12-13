/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var NewCase = function() {
  this.formEl = element(by.css('form'));
  this.nameInput = this.formEl.element(by.id('name-input'));
  this.submitButton = this.formEl.element(by.css('button'));
  this.alertEl = this.formEl.element(by.css('.alert'));
};

module.exports = new NewCase();

