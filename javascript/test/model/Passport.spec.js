/**
 * Trulioo SDK
 * Trulioo SDK 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TruliooSdk);
  }
}(this, function(expect, TruliooSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TruliooSdk.Passport();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Passport', function() {
    it('should create an instance of Passport', function() {
      // uncomment below and update the code to test Passport
      //var instane = new TruliooSdk.Passport();
      //expect(instance).to.be.a(TruliooSdk.Passport);
    });

    it('should have the property mrz1 (base name: "Mrz1")', function() {
      // uncomment below and update the code to test the property mrz1
      //var instane = new TruliooSdk.Passport();
      //expect(instance).to.be();
    });

    it('should have the property mrz2 (base name: "Mrz2")', function() {
      // uncomment below and update the code to test the property mrz2
      //var instane = new TruliooSdk.Passport();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "Number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new TruliooSdk.Passport();
      //expect(instance).to.be();
    });

    it('should have the property dayOfExpiry (base name: "DayOfExpiry")', function() {
      // uncomment below and update the code to test the property dayOfExpiry
      //var instane = new TruliooSdk.Passport();
      //expect(instance).to.be();
    });

    it('should have the property monthOfExpiry (base name: "MonthOfExpiry")', function() {
      // uncomment below and update the code to test the property monthOfExpiry
      //var instane = new TruliooSdk.Passport();
      //expect(instance).to.be();
    });

    it('should have the property yearOfExpiry (base name: "YearOfExpiry")', function() {
      // uncomment below and update the code to test the property yearOfExpiry
      //var instane = new TruliooSdk.Passport();
      //expect(instance).to.be();
    });

  });

}));
