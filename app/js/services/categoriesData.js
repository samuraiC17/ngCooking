cookingApp.factory('categoriesData', function($resource) {
    var resource = $resource('/json/categories.json/:id', { id: '@id' },
        { "getAll": { method: "GET", isArray: true } });
    return {
        getCategorie: function(categorieId) {
            return resource.get({ id: categorieId });
        },
        getAllCategories: function() {
            return resource.query();
        },
    };
});  