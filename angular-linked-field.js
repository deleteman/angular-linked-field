
angular.module("linkedField", []).
  directive('linkedField', function($timeout) {
    var linker = function ( scope, element, attrs) {
      
      $timeout(function() { 
        element.on(attrs.linkEvent, function() {
          scope[attrs.linkMethod].apply(angular.element("#" + attrs.linkedWith), [angular.element(this).val()]);
        });
      }, 200);

    };
    return {
        restrict: 'A',
        link: linker
    };
});
