'use strict'

cookingApp.controller('RecetteController',
    function RecetteController($scope, $routeParams, recetteData, rankingHelper) {
        $scope.showLimit = 4;
        recetteData.getRecette($routeParams.recetteId)
            .$promise.then(function (recette) {
                $scope.recette=recette;
                $scope.recette.hearts = rankingHelper.initHearts(recette.note);
                 $scope.show = recette.countComment > $scope.showLimit;
            });
       
        $scope.showMoreClass = 'glyphicon glyphicon-chevron-down';
        $scope.showMoreText = 'Afficher d\'avantage';
        
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
        $scope.initRecette = function (recette) {
            rankingHelper.initRecette(recette);
        };
    });
