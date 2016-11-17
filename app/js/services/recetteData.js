cookingApp.factory('recetteData', function($resource) {
    var resource = $resource('http://localhost:50488/Api/recipes:id', { id: '@id' },
        { "getAll": { method: "GET", isArray: true } });
    return {
        getRecette: function(recetteId) {
            return resource.get({ id: recetteId });
        },

        save: function(recette) {
            recette.id = 999;
            return resource.save(recette);
        },

        getAllRecette: function() {
            return resource.query();
        },
    };
});  


// cookingApp.factory('recetteData', function($resource) {
//     var resource = $resource('/json/recettes/:id', { id: '@id' },
//         { "getAll": { method: "GET", isArray: true } });
//     return {
//         getRecette: function(recetteId) {
//             return resource.get({ id: recetteId });
//         },

//         save: function(recette) {
//             recette.id = 999;
//             return resource.save(recette);
//         },

//         getAllRecette: function() {
//             return resource.query();
//         },
//     };
// });  