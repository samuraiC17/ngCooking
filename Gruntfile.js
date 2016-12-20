module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            main: {
                src: ['app/js/app.js', 'app/js/filters.js'],
                dest: 'min/main.js'
            },
            controllers: {
                src: [
                    'app/js/controllers/AuthController.js',
                    'app/js/controllers/CommunauteController.js',
                    'app/js/controllers/CommunauteListController.js',
                    'app/js/controllers/HomeController.js',
                    'app/js/controllers/IngredientsController.js',
                    'app/js/controllers/NavigationController.js',
                    'app/js/controllers/RecetteAddController.js',
                    'app/js/controllers/RecetteController.js',
                    'app/js/controllers/RecetteListController.js',
                    'app/js/controllers/TestController.js'
                ],
                dest: 'min/controllers.js'
            },

            directives: {
                src: [
                    'app/js/directives/cuistot.js',
                    'app/js/directives/ingredient.js',
                    'app/js/directives/recette.js'
                ],
                dest: 'min/directives.js'
            },
            services: {
                src: [
                    'app/js/services/categoriesData.js',
                    'app/js/services/communauteData.js',
                    'app/js/services/ingredientData.js',
                    'app/js/services/rankingHelper.js',
                    'app/js/services/recetteData.js'
                ],
                dest: 'min/services.js'
            },
            angular: {
                src: [
                    'app/lib/angular/angular.js',
                    'app/lib/angular/angular-cookies.js',
                    'app/lib/angular/angular-route.js',
                    'app/lib/angular/angular-sanitize.js',
                    'app/lib/angular/angular-resource.js'
                ],
                dest: 'min/angular-libs.js'
            },
            libs: {
                src: [
                    'app/lib/underscore-min.js',
                    'app/lib/jquery-2.1.4.min.js',
                    'app/lib/jquery.main.js',
                ],
                dest: 'min/libs.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'min/main.js': ['min/main.js'],
                    'min/controllers.js': ['min/controllers.js'],
                    'min/directives.js': ['min/directives.js'],
                    'min/services.js': ['min/services.js'],
                    'min/angular-libs.js': ['min/angular-libs.js'],
                    'min/libs.js': ['min/libs.js'],
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'css/min.css': ['app/css/reset.css', 'app/css/style.css']
                }
            }
        },
        watch: {
            dist: {
                files: [
                    'app/js/*.js',
                    'app/js/**/*.js',
                    'app/lib/*.js',
                    'app/lib/**/*.js'
                ],
                tasks: ['default'],
                options: { spawn: false }
            }
        }
    });

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
}