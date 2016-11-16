cookingApp.factory('ingredientData', function($resource) {
    var resource = $resource('/json/ingredients.json/:id', { id: '@id' },
{ "getAll": { method: "GET", isArray: false } });
    return {
        getIngredient: function(ingredientId) {
            return resource.get({ id: ingredientId });
        },
        getAllIngredients: function() {
            return resource.query();
        },
    };
});  