'use strict';

describe('Case View', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./new-case.po');
  });

  it('should validate short description', function() {
    page.submitButton.click()
    expect(page.alertEl.getText()).toBe('Case Short Description is required');
  });
});
