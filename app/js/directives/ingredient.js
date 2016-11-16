'use strict'

cookingApp.directive('ingredient', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/template/directives/ingredient.html',
        scope: {
            ingredient: "=",
            similars: "="
        }
    };
});