'use strict';

/* Directives */


angular.module('myApp.directives', []).
    directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]).
    directive('button', function () {
        return {
            restrict: 'E',
            compile: function (element, attributes) {
                element.addClass('btn');
            }
        }
    }).
    directive('pagination', function () {
        return {
            restrict: 'E',
            template: '<div class="pagination"><ul>' +
                '<li ng-repeat="page in pages">' +
                '<a>{{page}}</a>' +
                '</li>' +
                '</ul></div>',
            replace: true,
            scope: {
                numPages: '=',
                currentPage: '='
            },
            link: function (scope, element, attributes) {


                scope.$watch('numPages', function (value) {
                    scope.pages = [];
                    for (var i = 1; i <= value; i++) {
                        scope.pages.push(i);
                    }
                })
            }
        }
    })
;
