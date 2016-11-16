'use strict'

cookingApp.directive('cuistot', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/template/directives/cuistot.html',
        scope: {
            communaute: "="
        }
    };
});