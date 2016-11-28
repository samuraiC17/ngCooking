'use strict';

cookingApp.controller('NavigationController',
    function NavigationController($scope, $routeParams, $location, $log) {
        $scope.detailsCommunaute = function () {
            $location.replace();
            $location.url('/communaute/' + $routeParams.communauteId);
        };


        $scope.createRecette = function () {
            $location.replace();
            $location.url('/recette/add');
        };
        $scope.navigationInit = function (source) {
            $scope.page_hom = source === 'page_hom' ? 'page_hom' : 'page_hom active';
            $scope.page_rec = source === 'page_rec' ? 'page_rec' : 'page_rec active';
            $scope.page_ing = source === 'page_ing' ? 'page_ing' : 'page_ing active';
            $scope.page_com = source === 'page_com' ? 'page_com' : 'page_com active';
        }
    }
);