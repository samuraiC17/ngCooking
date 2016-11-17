cookingApp.factory('categoriesData', function($resource) {
    var resource = $resource('http://localhost:50488/Api/categories/:id', { id: '@id' },
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