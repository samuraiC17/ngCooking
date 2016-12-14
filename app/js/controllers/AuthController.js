'use strict'

cookingApp.controller('AuthController',
    function AuthController($scope, $http, $location, communauteData, $route) {
        $scope.userId = 0;

        $scope.login = function () {
            // var promise = communauteData.getAuth($scope.email, $scope.password)
            //     .then(function (resp) {
            //         return resp.data;
            //     });
           
            $scope.userId=1;
            console.log($scope.userId);
        }

        $scope.logout = function () {
            $scope.userId = 0;
        }
    });