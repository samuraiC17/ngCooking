'use strict'

Array.prototype.remove = function(value) {
    var array = this;
    return _.without(array, array.getById(value));
};

Array.prototype.getById = function(idToInsert) {
    var array = this;
    for (var i = 0; i < array.length; i++) {
        if (array[i].id == idToInsert) {
            return array[i];
        }
    }
    return {};
}

Array.prototype.insert = function(item) {
    var array = this;
    array[array.length] = item;
}

cookingApp.controller("RecetteAddController",
    function RecetteAddController($scope, $log, recetteData, $location, categoriesData, ingredientData) {
        $scope.categories = categoriesData.getAllCategories();
        $scope.ingredients = ingredientData.getAllIngredients();
        $scope.categorie = 'all'
        $scope.success = false;
        $scope.failure = false;
        $scope.ingredient = 'all'
        $scope.recipe = {}
        $scope.recipe.ingredients = [];
        $scope.recipe.picture = 'img/recette_placeholder.jpg';
        $scope.onFileSelected = function(event) {
            var selectedFile = event.target.files[0];
            var reader = new FileReader();

            var imgtag = document.getElementById("recipe_img");
            imgtag.title = selectedFile.name;

            reader.onload = function(event) {
                imgtag.src = event.target.result;
                $scope.recipe.picture = imgtag.src;
            };

            reader.readAsDataURL(selectedFile);
        };

        $scope.addIng = function(item) {
            $scope.recipe.ingredients.insert($scope.ingredients.getById(item));
        };
        $scope.removeIng = function(item_id) {
            $scope.recipe.ingredients = $scope.recipe.ingredients.remove(item_id);
        };

        $scope.getIng = function(item_id) {
            $scope.recipe.ingredients.getById("item_id", item_id, $scope.ingredients);
        };

        $scope.getTotalCalories = function() {
            var total = 0;
            for (var i = 0; i < $scope.recipe.ingredients.length; i++) {
                total += $scope.recipe.ingredients[i].calories;
            }
            return total;
        }

        $scope.saveRecette = function(recette, newRecetteForm) {
            if (newRecetteForm.$valid) {
                recetteData.save(recette)
                    .$promise
                    .then(function(response) { $scope.success = true; $scope.failure = false; })
                    .catch(function(response) { $scope.failure = true; $scope.success = false; })
            } else {
                $scope.failure = true;
                $scope.success = false;
            }
        };
        $scope.cancelEdit = function() {
            window.location = "/recettes";
        };

    }
);
