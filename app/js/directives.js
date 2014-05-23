'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
    directive('button', function(){
        return {
            restrict: 'E',
            compile: function(element, attributes){
                element.addClass('btn');
            }
        }
    }).
    directive('pagination', function(){
        return {
            restrict: 'E',
//            templateUrl: '/partials/pagination.html',
            compile: function(element, attributes){
                element.addClass('btn');
            }
        }
    })
;
