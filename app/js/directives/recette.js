'use strict'

cookingApp.directive('recette', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/template/directives/recette.html',
        scope: {
            recette: "="
        }
    };
});