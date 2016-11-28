cookingApp.factory('recetteData', function ($resource, CONFIG) {
    var resource = $resource(CONFIG['END_POINT'] + 'recipes/:id', { id: '@id' },
        { "getAll": { method: "GET", isArray: true } });
        
    return {
        getRecette: function (recetteId) {
            return resource.get({ id: recetteId });
        },

        save: function (recette) {
            return resource.save(recette);
        },

        getAllRecette: function () {
            return resource.query();
        },
    };
});