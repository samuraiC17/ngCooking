'use strict'

cookingApp.controller('CommunauteController',
    function CommunauteController($scope, $routeParams, communauteData, $location, rankingHelper, $filter, recetteData) {
        communauteData.getCommunaute($routeParams.communauteId)
            .$promise.then(function (communaute) {
                $scope.communaute = communaute;
                recetteData.getAllRecette()
                    .$promise.then(function (recettes) {
                        $scope.communaute.recettes = $filter('byUserId')(recettes, communaute.id);
                        $scope.communaute.countRecipes =$scope.communaute.recettes.length;
                    });
                $scope.communaute.stars = rankingHelper.initCommunaute(communaute);

                var today = new Date().getFullYear();
                $scope.communaute.age = today - communaute.birth;
            });
    });