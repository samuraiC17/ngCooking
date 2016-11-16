'use strict'

cookingApp.controller('HomeController',
    function HomeController($scope, recetteData,rankingHelper) {
        $scope.recettes = recetteData.getAllRecette();
         $scope.initRecette = function(recette) {
            rankingHelper.initRecette(recette);
        };
    });