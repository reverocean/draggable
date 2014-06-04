'use strict';

/* jasmine specs for directives go here */

describe('directives', function () {
    beforeEach(module('myApp.directives'));

    describe('app-version', function () {
        it('should print current version', function () {
            module(function ($provide) {
                $provide.value('version', 'TEST_VER');
            });
            inject(function ($compile, $rootScope) {
                var element = $compile('<span app-version></span>')($rootScope);
                expect(element.text()).toEqual('TEST_VER');
            });
        });
    });

    describe('Button directive', function(){
        var $compile, $rootScope;

        beforeEach(inject(function (_$rootScope_, _$compile_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        it('should have "btn" class to the button element', function(){
            var element = $compile('<button></button>')($rootScope);
            expect(element.hasClass('btn')).toBeTruthy();
        })
    });

    describe('Pagination directive', function () {
        var element, $scope, lis;

        beforeEach(inject(function ($compile, $rootScope) {
            $scope = $rootScope;
            $scope.numPage = 5;
            $scope.currentPage = 2;

            element = $compile('<pagination num-pages="numPages" current-page="currentPage"></pagination>')($scope);
            $scope.$digest();
            lis = function () {
                return element.find('li');
            };
        }));


        it('has the number of the page as text in each page item', function () {
            for (var i = 0;i < $scope.numPage; i++) {
                expect(lis.eq(i).text()).toEqual('' + i);
            }
        });
    });

});
