'use strict';

cookingApp.controller('CommunauteListController',
    function CommunauteListController($scope, communauteData, $log, rankingHelper) {
        $scope.communautes = communauteData.getAllCommunaute();
        $scope.showLimit = 8;
        $scope.showMoreClass = 'glyphicon glyphicon-chevron-down';
        $scope.showMoreText = 'Afficher d\'avantage';
        $scope.sortorder = 'name';
        $scope.initCommunaute = function(communaute) {
            rankingHelper.initCommunaute(communaute);
        };
        $scope.showMore = function() {
            if ($scope.showLimit === 8) {
                $scope.showLimit = '*';
                $scope.showMoreClass = 'glyphicon glyphicon-chevron-up';
                $scope.showMoreText = 'Afficher moins';
            } else {
                $scope.showLimit = 8;
                $scope.showMoreClass = 'glyphicon glyphicon-chevron-down';
                $scope.showMoreText = 'Afficher d\'avantage';
            }
        };
    }
);