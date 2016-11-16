'use strict'

cookingApp.controller('RecetteController',
    function RecetteController($scope, $routeParams, recetteData) {
        $scope.recette = recetteData.getRecette($routeParams.recetteId);
    });
