'use strict';

describe('Directive: Example', function () {
  beforeEach(module('componentExampleApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<blah></blah>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('');
  }));
});
