'use strict';

var cookingApp = angular.module('cookingApp', ['ngSanitize', 'ngResource', 'ngCookies', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/tests',
            {
                templateUrl: 'template/_tests.html',
                controller: 'TestController'
            });
        $routeProvider.when('/communaute',
            {
                templateUrl: 'template/communaute.html',
                controller: 'CommunauteListController'
            });
        $routeProvider.when('/communaute/:communauteId',
            {
                templateUrl: 'template/communaute_details.html',
                controller: 'CommunauteController'
            });
        $routeProvider.when('/recettesAdd',
            {
                templateUrl: 'template/recettes_new.html',
                controller: 'RecetteAddController'
            });
        $routeProvider.when('/recettes',
            {
                templateUrl: 'template/recettes.html',
                controller: 'RecetteListController'
            });
        $routeProvider.when('/recettes/:recetteId',
            {
                templateUrl: 'template/recette_details.html',
                controller: 'RecetteController'
            });


        $routeProvider.when('/home',
            {
                templateUrl: 'template/home.html',
                controller: 'HomeController'
            });
        $routeProvider.when('/ingredients',
            {
                templateUrl: 'template/ingredients.html',
                controller: 'IngredientsController'
            });

        $routeProvider.otherwise({ redirectTo: '/home' });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });