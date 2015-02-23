/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var NewCase = function() {
  this.formEl = element(by.css('form'));
  this.shortDescriptionInput = this.formEl.element(by.model('hwCase.shortDescription'));

  this.submitButton = this.formEl.element(by.css('button'));
  this.alertEl = this.formEl.element(by.css('.alert'));

  this.setShortDescription = function(value) {
    this.shortDescriptionInput.sendKeys(value);
    this.formEl.click();
  };

  this.errorMessages = function () {
    return this.alertEl.getText()
  }

  this.submit = function() {
    this.submitButton.click();
  };
};

module.exports = new NewCase();

