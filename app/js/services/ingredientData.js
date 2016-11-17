cookingApp.factory('ingredientData', function($resource) {
    var resource = $resource('http://localhost:50488/Api/ingredients/:id', { id: '@id' },
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