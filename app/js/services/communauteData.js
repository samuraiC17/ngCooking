cookingApp.factory('communauteData', function($resource) {
    var resource = $resource('/json/communaute.json/:id', { id: '@id' },
        { "getAll": { method: "GET", isArray: true } });
    return {
        getCommunaute: function(communauteId) {
            return resource.get({ id: communauteId });
        },
        getAllCommunaute: function() {
            return resource.query();
        },
    };
});  