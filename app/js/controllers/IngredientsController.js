'use strict';

cookingApp.controller('IngredientsController',
    function IngredientsController($scope, ingredientData, categoriesData) {
        $scope.categoryFilter = '*';
        $scope.nameFilter = '';
        $scope.minKFilter = 0;
        $scope.maxKFilter = 1000;
        $scope.ingredients = ingredientData.getAllIngredients();
        $scope.categories = categoriesData.getAllCategories();
        var showLimit = 4;
        $scope.showLimit = showLimit;
        $scope.showMoreClass = 'glyphicon glyphicon-chevron-down';
        $scope.showMoreText = 'Afficher d\'avantage';



        $scope.showMore = function() {
            if ($scope.showLimit === showLimit) {
                $scope.showLimit = '*';
                $scope.showMoreClass = 'glyphicon glyphicon-chevron-up';
                $scope.showMoreText = 'Afficher moins';
            } else {
                $scope.showLimit = showLimit;
                $scope.showMoreClass = 'glyphicon glyphicon-chevron-down';
                $scope.showMoreText = 'Afficher d\'avantage';
            }
        };
    }
);