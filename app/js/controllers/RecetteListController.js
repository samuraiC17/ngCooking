'use strict';

cookingApp.controller('RecetteListController',
    function RecetteListController($scope, recetteData, rankingHelper,CONFIG) {

        $scope.recettes = recetteData.getAllRecette();
        $scope.showLimit = 4;
        $scope.showMoreClass = 'glyphicon glyphicon-chevron-down';
        $scope.showMoreText = 'Afficher d\'avantage';
        $scope.ingredientFilter = '';
        $scope.nameFilter = '';
        $scope.minKFilter = 0;
        $scope.maxKFilter = 1000;

        $scope.sortorder = 'name';
        $scope.initRecette = function (recette) {
            rankingHelper.initRecette(recette);
        };
        $scope.showMore = function () {
            if ($scope.showLimit === 4) {
                $scope.showLimit = '*';
                $scope.showMoreClass = 'glyphicon glyphicon-chevron-up';
                $scope.showMoreText = 'Afficher moins';
            } else {
                $scope.showLimit = 4;
                $scope.showMoreClass = 'glyphicon glyphicon-chevron-down';
                $scope.showMoreText = 'Afficher d\'avantage';
            }
        };
    }
);