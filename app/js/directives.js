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
            template: '<div class="pagination"><ul>' +
                '<li ng-repeat="page in pages">' +
                '<a>{{page}}</a>' +
                '</li>' +
                '</ul></div>',
            compile: function(element, attributes){
                element.addClass('btn');
            }
        }
    })
;
