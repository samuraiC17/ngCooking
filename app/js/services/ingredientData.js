cookingApp.factory('ingredientData', function($resource,CONFIG) {
    var resource = $resource(CONFIG['END_POINT'] + 'ingredients/:id', { id: '@id' },
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