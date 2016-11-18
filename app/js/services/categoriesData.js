cookingApp.factory('categoriesData', function ($resource,CONFIG) {
    var resource = $resource(CONFIG['END_POINT'] + 'categories/:id', { id: '@id' },
        { "getAll": { method: "GET", isArray: true } });
    return {
        getCategorie: function (categorieId) {
            return resource.get({ id: categorieId });
        },
        getAllCategories: function () {
            return resource.query();
        },
    };
});  