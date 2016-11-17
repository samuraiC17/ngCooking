cookingApp.factory('communauteData', function($resource) {
    var resource = $resource('http://localhost:50488/Api/communities/:id', { id: '@id' },
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