'use strict'

cookingApp.controller('CommunauteController',
    function CommunauteController($scope, $routeParams, communauteData, $location) {
        $scope.communaute = communauteData.getCommunaute($routeParams.communauteId);
    });
