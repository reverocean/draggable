'use strict';

/* Directives */


angular.module('myApp.directives', []).
    directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]).
    directive('simpleModel', ['$parse', function ($parse) {
        return function (scope, element, attrs) {
            var modelGetter = $parse(attrs.simpleModel);
            var modelSetter = modelGetter.assign;

            element.bind('input', function () {
                scope.$apply(function(){
                    modelSetter(scope, element.val());
//                    scope.name = element.val();
                });
            });
        };

    }]).
    directive('simpleBind', ['$parse', function($parse){
        return function(scope, element, attrs){
            var modelGetter = $parse(attrs.simpleBind);
            scope.$watch(modelGetter, function (newValue, oldValue) {
                element.text(modelGetter(scope));
            });


        };
    }])
;
